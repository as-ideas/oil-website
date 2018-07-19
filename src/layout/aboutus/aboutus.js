import React from "react";

require('./aboutus.scss');


class AboutUs extends React.Component {
  render() {
    return (
      <div id="aboutus" className="aboutus section">
        <div className="aboutus-content section-content">
          <h6>WHY OIL</h6>
          <h2>About us</h2>
          <p className="aboutus__description">
            When we set out to find compliance solutions for cookies and other technologies, we realized there was no mature solution available, and built our own: the Opt-in and Transparency Layer (OIL). Cookie usage directly affects our core business and we therefore believe it makes sense for publishers to keep compliance solutions in their own hands. Additionally, we are collaborating with other publishers from across Europe to improve OIL even further.
          </p>
          <div className="two-cols">
            <div className="aboutus-left left">
              <p className="aboutus__citation">
                <br className="not-xs"/><br className="not-xs"/><br className="not-xs"/>
                “We welcome the initiative of Axel Springer and support the project. We will implement the 'Opt-in and Transparency Layer' in the brands of BurdaForward, setting another milestone in our Goodvertising strategy.”
                <br/><br/>
                <span className="aboutus__citation-author">- Martin Lütgenau, Managing Director BurdaForward Advertising</span>
              </p>
            </div>
            <div className="aboutus-right right">
              <p className="aboutus__citation">
                “Instead of leaving the field to the dominant US platforms, we want to work with the European publishing and advertising industry to develop coherent standards that benefit the entire ecosystem. That’s why we offer our software under a free open source license – the more companies participate in this project, the better.”
                <br/><br/>
                <span className="aboutus__citation-author">- Moritz Holzgraefe, COO of Corporate Digital Platforms at Axel Springer</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default AboutUs;
