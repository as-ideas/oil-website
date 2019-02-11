import React from "react"

import Header from '../../../layout/header/header';
import Footer from '../../../layout/footer/footer';
import EncoderUtils from './../../../components/EncoderUtils';

require('./quick-calculator.scss');

// 172 with bitstring
// 172+13 = 185 with ranges + n per entry
const FIXED_PART_V1 = 185;
const FIXED_PART_WITH_BITSTRING_V1 = 172;

// v2 = +26 bits
const FIXED_PART_V2 = 211;
const FIXED_PART_WITH_BITSTRING_V2 = 198;

export default class QuickCalculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value01: 0,
      value02: 0,
      value03: 472,
      value11: 0,
      value12: 0,
      value13: 472
    };
  }

  calculateResults() {


  }

  onInputChange1(event) {
    this.state.value01 = parseInt(event.target.value);
    this.setState(this.state);
  }

  onInputChange2(event) {
    this.state.value02 = parseInt(event.target.value);
    this.setState(this.state);
  }

  onInputChange3(event) {
    this.state.value03 = parseInt(event.target.value);
    this.setState(this.state);
  }

  onInputChange11(event) {
    this.state.value11 = parseInt(event.target.value);
    this.setState(this.state);
  }

  onInputChange12(event) {
    this.state.value12 = parseInt(event.target.value);
    this.setState(this.state);
  }

  onInputChange13(event) {
    this.state.value13 = parseInt(event.target.value);
    this.setState(this.state);
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

      <div className="tooling section">
        <div className="tooling-conent section-content">
          <h2>Quick calculator consent string v1</h2>
          <br/>

          <div>
            <h4 style={{margin: "8px 0"}}>Using Blacklist/Whitelist with single vendors</h4>

            <div style={{margin: "12px 8px"}}>
              <div> Fixed: {FIXED_PART_V1} bits + 17 bits per entry</div>
              <div>Number of blacklists/whitelist entries:</div>
              <input
                value={this.state.value01}
                onChange={this.onInputChange1.bind(this)}
                style={{margin: "12px 0", width: "100%", maxWidth: "200px"}}
              />
              <div className="tooling-result">
                Size:
                <div className="tooling-result__result-box" style={{margin: "12px 0", width: "100%", maxWidth: "300px"}}>
                  {(17 * this.state.value01) + FIXED_PART_V1} bits
                  <br/>
                  {this.calculateBase64String((17 * this.state.value01) + FIXED_PART_V1)} characters in Base64-String
                </div>
              </div>
            </div>
          </div>

          <div>
            <h4 style={{margin: "8px 0"}}>Using Blacklist/Whitelist with range of vendors</h4>

            <div style={{margin: "12px 8px"}}>
              <div> Fixed: {FIXED_PART_V1} bits + 33 bits per entry</div>
              <div>Number of blacklists/whitelist range entries:</div>
              <input
                value={this.state.value02}
                onChange={this.onInputChange2.bind(this)}
                style={{margin: "12px 0", width: "100%", maxWidth: "200px"}}
              />
              <div className="tooling-result">
                Size:
                <div className="tooling-result__result-box" style={{margin: "12px 0", width: "100%", maxWidth: "300px"}}>
                  {(33 * this.state.value02) + FIXED_PART_V1} bits
                  <br/>
                  {this.calculateBase64String((33 * this.state.value02) + FIXED_PART_V1)} characters in Base64-String
                </div>
              </div>
            </div>
          </div>

          {/* V1 with bitstring */}
          <div>
            <h4 style={{margin: "8px 0"}}>Using the bitfield for vendors (currently 472 vendors)</h4>

            <div style={{margin: "12px 8px"}}>
              <div> Fixed: {FIXED_PART_WITH_BITSTRING_V1} bits + 1 bits per vendor</div>
              <div>Number of vendors on the GLV (Global Vendor List):</div>
              <input
                value={this.state.value03}
                onChange={this.onInputChange3.bind(this)}
                style={{margin: "12px 0", width: "100%", maxWidth: "200px"}}
              />
              <div className="tooling-result">
                Size:
                <div className="tooling-result__result-box" style={{margin: "12px 0", width: "100%", maxWidth: "300px"}}>
                  {(this.state.value03) + FIXED_PART_WITH_BITSTRING_V1} bits
                  <br/>
                  {this.calculateBase64String((this.state.value03) + FIXED_PART_WITH_BITSTRING_V1)} characters in Base64-String
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Version 2 */}
        <div className="tooling-conent section-content">
          <h2>Quick calculator consent string v2 (current proposal)</h2>
          <h5>New in the "fixed size" part: LIPurposesAllowed, LIEncodingType, LIEstablishedForGVLDefault, LIBitFieldSection </h5>
          <h5>New in the "dynamic size" part of the entries: PurposeId, Disallowed (+ 7 bits for each entry)</h5>
          <br/>

          {/* v2 with single vendor */}
          <div>
            <h4 style={{margin: "8px 0"}}>Using Blacklist/Whitelist with single vendors (with only one purpose override per entry)</h4>

            <div style={{margin: "12px 8px"}}>
              <div> Fixed: {FIXED_PART_V2} bits + 24 bits per entry</div>
              <div>Number of blacklists/whitelist entries:</div>
              <input
                value={this.state.value11}
                onChange={this.onInputChange11.bind(this)}
                style={{margin: "12px 0", width: "100%", maxWidth: "200px"}}
              />
              <div className="tooling-result">
                Size:
                <div className="tooling-result__result-box" style={{margin: "12px 0", width: "100%", maxWidth: "300px"}}>
                  {(17 * this.state.value11) + FIXED_PART_V2} bits
                  <br/>
                  {this.calculateBase64String((24 * this.state.value11) + FIXED_PART_V2)} characters in Base64-String
                </div>
              </div>
            </div>
          </div>

          {/* v2 with vendor range */}
          <div>
            <h4 style={{margin: "8px 0"}}>Using Blacklist/Whitelist with single vendors</h4>

            <div style={{margin: "12px 8px"}}>
              <div> Fixed: {FIXED_PART_V2} bits + 40 bits per entry</div>
              <div>Number of blacklists/whitelist entries:</div>
              <input
                value={this.state.value12}
                onChange={this.onInputChange12.bind(this)}
                style={{margin: "12px 0", width: "100%", maxWidth: "200px"}}
              />
              <div className="tooling-result">
                Size:
                <div className="tooling-result__result-box" style={{margin: "12px 0", width: "100%", maxWidth: "300px"}}>
                  {(17 * this.state.value12) + FIXED_PART_V2} bits
                  <br/>
                  {this.calculateBase64String((40 * this.state.value12) + FIXED_PART_V2)} characters in Base64-String
                </div>
              </div>
            </div>
          </div>

          {/* V2 with bitstring */}
          <div>
            <h4 style={{margin: "8px 0"}}>Using the two bitfield for vendors (currently 472 vendors)</h4>

            <div style={{margin: "12px 8px"}}>
              <div> Fixed: {FIXED_PART_WITH_BITSTRING_V2} bits + 2 bits per vendor</div>
              <div>Number of vendors on the GLV (Global Vendor List):</div>
              <input
                value={this.state.value13}
                onChange={this.onInputChange13.bind(this)}
                style={{margin: "12px 0", width: "100%", maxWidth: "200px"}}
              />
              <div className="tooling-result">
                Size:
                <div className="tooling-result__result-box" style={{margin: "12px 0", width: "100%", maxWidth: "300px"}}>
                  {(this.state.value13 * 2) + FIXED_PART_WITH_BITSTRING_V2} bits
                  <br/>
                  {this.calculateBase64String((this.state.value13 * 2) + FIXED_PART_WITH_BITSTRING_V2)} characters in Base64-String
                </div>
              </div>
            </div>
          </div>

        </div>

        <br/>

        <div className="tooling-conent section-content faq-and-hints">
          <h2>FAQ & HINTS</h2>
          <h5>Do you need to use the ranges?</h5>
          <div>No! You CAN use the BitField. The size is 1 bit per vendor. For version2 of the consent string there are 2 bit fields - one for the consent and one for LI. This means you have the "fixed size" + 2 bits per vendor on the vendorlist.</div>

          <h5>How many character can be store in a cookie?</h5>
          <div>
            It depends on the browser. In generell the cookies are stored in UTF-8 encoding. This means for most characters you have 1 Byte. It is save to assume you can at least store 4096 Bytes in any browser per cookie. For more information: <a href="https://stackoverflow.com/questions/25665703/encoding-scheme-used-for-cookies">https://stackoverflow.com/questions/25665703/encoding-scheme-used-for-cookies</a>
          </div>

          <h5>Can I use blacklisting and whitelisting?</h5>
          <div>
            No. You can always use blacklist or whitelist in any consent string. Not both! It depends on the default, eg. if "consent=true" is default or not.
          </div>

          <h5>Must I also decide if I use vendor ranges or single vendors per entry?</h5>
          <div>
            You can per entry decide if it is a single vendor or a range of vendors. You can decide this for each entry.
          </div>
        </div>
      </div>
      <Footer/>
    </div>)
  }
}
