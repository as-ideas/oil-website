import React from "react";

require('./features.scss');

const FeatureBox = (props) => {
  return <div className="feature-box">
    <div className="icon">
      <div className="icon-round"><i className="fab fa-accessible-icon"/></div>
    </div>
    <div>
      <h4>{props.title}</h4>
      <p>{props.children}</p>
    </div>
  </div>
};

class Features extends React.Component {
  render() {
    return (
      <div className="features section grey-background">
        <div className="features__headlines section-content">
          <h6>FEATURES</h6>
          <h2>OIL Features</h2>
        </div>
        <div className="features-content section-content">
          <FeatureBox title="High performance / Low latency">
            Optimized to ensure maximum performance. Every millisecond counts.
          </FeatureBox>
          <FeatureBox title="Fully customizable">
            Customize from your banner text, design, location to CPC design according to your needs.

          </FeatureBox>
          <FeatureBox title="Easy to implement">
            Simply insert a javascript file in your website. <a href="" target="_blank">Find out more in our documentation.</a>
          </FeatureBox>
          <FeatureBox title="High transparency for users">
            Simple and customizable user interface informs your user and allows cookie management on a granular level.
          </FeatureBox>
          <FeatureBox title="Adjustable to regulatory situation">
            OIL gives you the flexibility to react to regulatory changes in the short term. Use OIL as an Opt-out tool either natively integrated into the privacy policy or displayed on a banner.
          </FeatureBox>
          <FeatureBox title="A/B testing capability ">
            Improve your consent conversion by testing it.
          </FeatureBox>
        </div>
      </div>
    )
  }
}

export default Features;
