import React from "react"

import Header from '../../../layout/header/header';
import Footer from '../../../layout/footer/footer';
import EncoderUtils from './../../../components/EncoderUtils';

require('./quick-calculator-v2-proposal.scss');

const FIXED_PART_V2 = 211;

export default class QuickV2Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value1: 472,
      value2: 0,
      value3: 0,
    };
  }

  onInputChange1(event) {
    this.state.value1 = parseInt(event.target.value);
    this.setState(this.state);
  }

  onInputChange2(event) {
    this.state.value2 = parseInt(event.target.value);
    this.setState(this.state);
  }

  onInputChange3(event) {
    this.state.value3 = parseInt(event.target.value);
    this.setState(this.state);
  }

  calculateBase64StringBits() {
    return FIXED_PART_V2 + (2 * this.state.value1) + (24 * this.state.value2) + (24 * this.state.value3);
  }

  calculateBase64StringSize() {
    let numberOfBits = this.calculateBase64StringBits();
    let binaryString = "";
    for (let i = 0; i < numberOfBits; i++) {
      binaryString += 0;
    }
    let encodedString = EncoderUtils.encodeBinaryBitStringToBase64(binaryString);
    return encodedString.length;
  }

  calculateBase64String(numberOfBits) {
    let binaryString = "";
    for (let i = 0; i < numberOfBits; i++) {
      binaryString += 0;
    }
    let encodedString = EncoderUtils.encodeBinaryBitStringToBase64(binaryString);
    return encodedString.length;
  }

  render() {
    return (<div className="app-content">
      <Header/>

      <div className="quick-calculator section">
        <div className="tooling-content section-content">
          <h2 style={{marginBottom: "12px"}}>Calculator for TCF consent string v2 (current proposal #5, hybrid model)</h2>
          <h5>New in the "fixed size" part: LIPurposesAllowed, LIEncodingType, LIEstablishedForGVLDefault, LIBitFieldSection </h5>
          <h5>New in the "dynamic size" part is a field of bits for LI (1 Bit per vendor on GVL)</h5>
          <h5>New in the "dynamic size" part is a section of "Publisher Overrides", consisting of a dynamic number of entries</h5>
          <br/>

          <h5>EXAMPLE</h5>
          <ul className="hints">
            <li>We have 1000 vendors in the GVL. For 20 vendors I want to override a single purpose, for 10 more I want to override two purposes.
              <ul>
                <li>Fixed part: ~{FIXED_PART_V2} Bits</li>
                <li>For consent: 1000 Bits</li>
                <li>For LI: 1000 Bits</li>
                <li>For publisher override: 40 * 24 Bits = 960 Bits</li>
                <li><strong>Total size: 3171 Bits, {this.calculateBase64String(3171)} characters with Base64 encoding</strong></li>
              </ul>
            </li>
          </ul>

          <h5>HINTS</h5>
          <ul className="hints">
            <li>
              The dynamic part has now multiple parts with v2:
              <ul>
                <li>For consent: Field of Bits (BitField) or List with Entries</li>
                <li>For LI: Field of Bit (BitField) or List wit Entries</li>
                <li>For publisher override: List with entires</li>
              </ul>
            </li>
            <li>The field of Bits has one Bit per GVL vendor. For v2 there are two fields of Bits with each one Bit per GVL vendor.</li>
            <li>
              The entries for publisher overrides for purposes per vendor are dynamic. You can per entry decide if it is a single vendor or a range of vendors.
            </li>
            <li>
              Each entry in the "publisher override list" can override only a single purpose. If you want to override two purposes for a range or a single vendor, you will need two entries. The proposal says: "(can optimize if publisher wants to do override for multiple purposes for a given vendor)". This option/change would add at least 18 Bits for each entry.
            </li>
            <li>
              You can only decide for Legitimate Interest per Purpose, not per Vendor and Purpose.
            </li>
          </ul>

          <br/>
          {/* START CALC*/}
          <div className="calc-form">
            <h4 style={{margin: "10px 0"}}>Calculator</h4>

            <div style={{margin: "12px 8px"}}>
              <div className="input-element">
                <label>
                  Number of vendors on GVL:
                  <input
                    type="number"
                    name="number-of-single-vendor-entries"
                    value={this.state.value1}
                    onChange={this.onInputChange1.bind(this)}
                  />
                </label>
              </div>

              <div className="input-element">
                <label>
                  Number of single vendor entries (one entry per purpose to override):
                  <input
                    type="number"
                    name="number-of-single-vendor-entries"
                    value={this.state.value2}
                    onChange={this.onInputChange2.bind(this)}
                  />
                </label>
              </div>

              <div className="input-element">
                <label>
                  Number of range entries (one entry per purpose to override):
                  <input
                    type="number"
                    name="number-of-range-entries"
                    value={this.state.value3}
                    onChange={this.onInputChange3.bind(this)}
                  />
                </label>
              </div>

              <div className="tooling-result">
                <h3>Result (SIZE):</h3>
                <div className="tooling-result__result-box" style={{margin: "12px 0"}}>
                  <h2>{this.calculateBase64StringBits()} Bits</h2>
                  <h2>{this.calculateBase64StringSize()} characters in Base64-String</h2>
                </div>
              </div>
            </div>
          </div>
          {/* END CALC*/}

          <h5>HINTS #2</h5>
          <ul className="hints">
            <li>
              Each consent string is a chain of Bits. These Bits are Base64 encoded and represented as a string of ASCII characters for storage and transmission. It consists of a fixed part which you will always need, and a dynamic part, which differs in size depending on GVL size, user choice and publisher overrides.
            </li>
            <li> As a publisher, I want to whitelist (or blacklist) 200 vendors, because I only want to work with those. This happens with a logical OR/AND operator on the BitField and does not change the size. If you would use the list of entries for the consent, the entries would work as blacklist or as whitelist - it depends on the default of the list and if it is "defaultConsent" or not.</li>
            <li>It does not make sense to use the "list with entries" for consent anymore, as with blacklisting/whitelisting the list becomes huge.</li>
            <li>8 Bit are 1 Byte. Base64-Encodings adds ~30% in size. We assume 1 Byte per character.</li>
            <li>
              Each entry for the publisher overrides consists of
              <ul>
                <li>1 bit: Single vendor or range</li>
                <li>16/32bits: Id of vendor or start and end of the range of vendors</li>
                <li>6 bits: PurposeId to override</li>
                <li>1 bit: allowed/disallowed</li>
              </ul>
            </li>
            <li>
              How many character can be store in a cookie? It depends on the browser. In general the cookies are stored in UTF-8 encoding. This means for most characters you have 1 Byte. It is save to assume you can at least store 4096 Bytes in any browser per cookie. For more information: <a href="https://stackoverflow.com/questions/25665703/encoding-scheme-used-for-cookies">https://stackoverflow.com/questions/25665703/encoding-scheme-used-for-cookies</a>
            </li>
          </ul>
        </div>
      </div>
      <Footer/>
    </div>)
  }
}
