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
              <li>
                <a href="&#109;&#097;&#105;&#108;&#116;&#111;:&#111;&#105;&#108;&#045;&#115;&#117;&#112;&#112;&#111;&#114;&#116;&#064;&#097;&#115;&#105;&#100;&#101;&#097;&#115;&#046;&#100;&#101;" className="footer__link">&#111;&#105;&#108;&#045;&#115;&#117;&#112;&#112;&#111;&#114;&#116;&#064;&#097;&#115;&#105;&#100;&#101;&#097;&#115;&#046;&#100;&#101;</a>
              </li>
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
