import React from "react";
import LinkButton from '../index/button/link-button';

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
            {/*no content anymore*/}
          </div>
          <div className="footer-col__3">
            <h3>Other</h3>
            <ul>
              <li><LinkButton text="Github" cssClass="footer__link"/></li>
            </ul>
          </div>
          <div className="footer-col__4">
            <h3>Contact</h3>
            <ul>
              <li>Axel Springer SE</li>
              <li>Axel-Springer-Str. 65,<br/> 10888 Berlin</li>
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
