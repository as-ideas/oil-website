import React from "react";
import WebinarForm from "./../webinar-form/webinar-form.js";

require('./support.scss');


class Support extends React.Component {
  render() {
    return (
      <div id="support" className="support section">
        <div className="support__titles section-content">
          <h6>SUPPORT</h6>
          <h2>Contact & Additional Information</h2>
          <p>
            Want to know more about OIL?
            <br/>
            Drop a message: <b><a href="&#109;&#97;&#105;&#108;&#116;&#111;&#58;&#111;&#105;&#108;&#045;&#115;&#117;&#112;&#112;&#111;&#114;&#116;&#64;&#97;&#115;&#105;&#100;&#101;&#97;&#115;&#46;&#100;&#101;">&#111;&#105;&#108;&#045;&#115;&#117;&#112;&#112;&#111;&#114;&#116;&#64;&#97;&#115;&#105;&#100;&#101;&#97;&#115;&#46;&#100;&#101;</a></b>
          </p>
        </div>
        <div className="support__titles section-content">
          <WebinarForm />
        </div>
      </div>
    )
  }
}

export default Support;
