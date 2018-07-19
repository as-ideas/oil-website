import React from "react";
import LinkButton from '../button/link-button';

require('./footer.scss');

class Footer extends React.Component {
  render() {
    return (
      <div id="footer" className="footer section">
        <div className="footer-content">
          <div className="footer-col__1">
            <img src={require('../header/logo.svg')}/>
          </div>
          <div className="footer-col__2">
            <h3>Sitemap</h3>
            <ul>
              <li><a href="/#header" className="footer__link">Home</a></li>
              <li><a href="/#product" className="footer__link">Product</a></li>
              <li><a href="/#quickstart" className="footer__link">Developer</a></li>
              <li><a href="/#collaboration" className="footer__link">Collaboration</a></li>
              <li><a href="/#support" className="footer__link">Support</a></li>
              <li><a href="/#aboutus" className="footer__link">About us</a></li>
            </ul>
          </div>
          <div className="footer-col__3">
            <h3>Other</h3>
            <ul>
              <li><LinkButton text="Github" cssClass="footer__link" /></li>
              <li><LinkButton text="Documentation" cssClass="footer__link" /></li>
              <li><LinkButton text="Sandbox" cssClass="footer__link" /></li>
            </ul>
          </div>
          <div className="footer-col__4">
            <h3>Contact</h3>
            <ul>
              <li>Axel Springer SE</li>
              <li>Axel-Springer-Str. 65,<br/> 10888 Berlin</li>
              <li><a href="mailto:hello@asideas.de" className="footer__link">hello@asideas.de</a></li>
            </ul>
            <ul>
              <li><a href="/imprint" className="footer__link">Impressum &amp; Privacy Policy</a></li>
            </ul>
          </div>

        </div>
      </div>
    )
  }
}

export default Footer;
