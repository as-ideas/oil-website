import React from "react"

import Header from '../../layout/header/header';
import Footer from '../../layout/footer/footer';
import ConsentStringVersion1Fields from './../../components/ConsentStringVersion1Fields';
import EncoderUtils from "./../../components/EncoderUtils";

require('./consent-string.scss');
require('./table-style.scss');


export default class ConsentStringDecoder extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCookieVersion: 1,
      decodedObject: {},
      encodedObject: {},
      consentStringBitString: "",
      consentStringBase64: ""
    };

    ConsentStringVersion1Fields.fields
      .forEach((element) => {
        this.state.decodedObject[element.name] = this.getDefaultValues(element);
        this.state.encodedObject[element.name] = EncoderUtils.encodeField({
          decodedObject: this.state.decodedObject,
          field: element
        })
      });
    this.calculateResults();

    this.onInputChange = this.onInputChange.bind(this);
  }

  getDefaultValues = (field) => {
    switch (field.type) {
      case 'bool':
        return false;
      case 'int':
        return 1;
      case 'date':
        return new Date();
      case 'list':
        return [];
    }
  };

  getBitCount = ({numBits}) => {
    const {decodedObject} = this.state;
    if (typeof numBits === 'function') {
      return numBits(decodedObject);
    }
    if (typeof numBits === 'number') {
      return numBits;
    }
    return '(variable)';
  };

  calculateResults() {
    this.state.consentStringBitString = "";
    ConsentStringVersion1Fields.fields
      .forEach((element) => {
        this.state.consentStringBitString += this.state.encodedObject[element.name];
      });
    this.state.consentStringBase64 = EncoderUtils.encodeBinaryBitStringToBase64(this.state.consentStringBitString);
  }

  onInputChange(field) {
    return (event) => {
      console.info("Value changed for ", field.name, "from", this.state.decodedObject[field.name], "to", event.target.value);
      this.state.decodedObject[field.name] = event.target.value;

      if (field.type !== 'list') {
        this.state.encodedObject[field.name] = EncoderUtils.encodeField({
          decodedObject: this.state.decodedObject,
          field
        })
      }
      this.calculateResults();

      this.setState(this.state);
    }
  }

  getInputElement = (field) => {
    let isDisabled = false;
    let defaultValue = this.state.decodedObject[field.name];

    switch (field.type) {
      case 'bool':
        return <label>
          <input
            type='checkbox'
            disabled={isDisabled}
            checked={defaultValue}
            onChange={this.onInputChange(field)}
          />
        </label>;
      case '6bitchar':
      case 'int':
      case 'bits':
        return <input
          disabled={isDisabled}
          // onKeyUp={this.onInputChange(field)}
          value={defaultValue}
          onChange={this.onInputChange(field)}
        />;
      case 'date':
        return <input
          disabled={isDisabled}
          onChange={this.onInputChange(field)}
          value={defaultValue}
        />;
      default:
        return '???';
    }
  };


  renderInputRow = (field) => {
    const {name, type, validator} = field;
    const isDisabled = validator && !validator(field);
    // const indent = (objectPath || '').split('.').length * 15;
    const className = isDisabled ? "isDisabled" : "";
// firstTdStyleForName = {{paddingLeft: `${indent}px`}}
    return (
      <tr className={className} key={field.name}>
        <td>{name}</td>
        <td>{type}</td>
        <td>{this.getBitCount(field)}</td>
        <td>
          {this.getInputElement(field)}
        </td>
        <td className="encodedValue">
          {this.state.encodedObject[field.name]}
        </td>
      </tr>
    );
  };

  render() {
    return (<div className="app-content">
      <Header/>

      <div className="tooling section">
        <div className="tooling-conent section-content">
          <h1 className="tooler-header">Consent String Calculator - ENCODER</h1>

          <h6>Fixed part (172 bits)</h6>
          <table>
            <thead>
            <tr>
              <th>Field</th>
              <th>Type</th>
              <th>Number Bits</th>
              <th>Value</th>
              <th>Binary</th>
            </tr>
            </thead>
            <tbody>
            {
              ConsentStringVersion1Fields.fields
                .filter((element, index) => index < 10)
                .map((element, index) => {
                  return this.renderInputRow(element);

                })
            }
            </tbody>
          </table>

          <br/>

          <h6>Dynamic part</h6>
          <table>
            <tbody>
            {
              ConsentStringVersion1Fields.fields
                .filter((element, index) => index >= 10)
                .map((element, index) => {
                  return this.renderInputRow(element);
                })
            }
            </tbody>
          </table>

          <br/>

          <h6>Result:</h6>
          <div className="tooling-result">
            <h5 className="">Size</h5>
            <div className="tooling-result__result-box">
              {this.state.consentStringBitString.length} bits
              <br/>
              {this.state.consentStringBase64.length} Characters

            </div>

            <h5 className="">Binary Cookie Value</h5>
            <div className="tooling-result__result-box">
              {this.state.consentStringBitString}
            </div>

            <br/>

            <h5 className="">Base64 Encoded Cookie Value</h5>
            <div className="tooling-result__result-box">
              {this.state.consentStringBase64}
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>)
  }
}
