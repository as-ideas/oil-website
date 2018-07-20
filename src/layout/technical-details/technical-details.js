import React from "react";

require('./technical-details.scss');

class TechnicalDetails extends React.Component {
  render() {
    return (
      <div id="technical-details" className="technical-details section">
        <div className="technical-details-content section-content">
          <div className="two-cols">
            <div className="technical-details-left left">
              <h6>DEVELOPER</h6>
              <h2>Let's Talk Tech</h2>
              <ul className="fa-ul">
                <li><i className="fa fa-li fa-angle-right"/> JavaScript. Super optimized. Non-blocking.</li>
                <li><i className="fa fa-li fa-angle-right"/> Written in ECMA Script 2015 and transpiled to ES5.</li>
                <li><i className="fa fa-li fa-angle-right"/> Comes with a super slim pre-loader to minimize traffic.</li>
                <li><i className="fa fa-li fa-angle-right"/> Built with WebPack2 and lots of optimizations.</li>
                <li><i className="fa fa-li fa-angle-right"/> Jasmine & Mocha unit tests which cover everything.</li>
                <li><i className="fa fa-li fa-angle-right"/> Nightwatch Selenium Tests to test all features.</li>
                <li><i className="fa fa-li fa-angle-right"/> Automated Browserstack Testfarm (Multibrowser, Desktop, Android, iOS).</li>
                <li><i className="fa fa-li fa-angle-right"/> Continuous Integration with Jenkins.</li>
                <li><i className="fa fa-li fa-angle-right"/> Load tested with 2.000 requests per second.</li>
              </ul>
            </div>
            <div className="technical-details-right right">
              <h6>DEVELOPER</h6>
              <h2>Browser Support</h2>
              <p>We support 99.99% of all Browsers!</p>
              <ul className="fa-ul">
                <li><i className="fab fa-li fa-android"/>Android 4+</li>
                <li><i className="fab fa-li fa-apple"/> Iphone 4S+</li>
                <li><i className="fab fa-li fa-internet-explorer"/> IE9+</li>
                <li><i className="fab fa-li fa-chrome"/> Chrome 14+</li>
                <li><i className="fab fa-li fa-firefox"/> Firefox 9+</li>
                <li><i className="fab fa-li fa-safari"/> Safari 6+</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default TechnicalDetails;
