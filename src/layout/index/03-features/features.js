import React from "react";
import GreyBackgroundPart from '../background/grey-background-part';

require('./features.scss');

const FeatureBox = (props) => {
  return <div className="feature-box">
    <div className="icon">
      <div className="icon-round"><img src={require(props.icon)}/></div>
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
      <div id="features" className="features section">
        <GreyBackgroundPart type="top"/>
        <div className="grey-background">
          <div className="features__headlines section-content">
            <h6>PRODUCT</h6>
            <h2>OIL Features</h2>
          </div>
          <div className="features-content section-content">
            <FeatureBox title="High performance / Low latency" icon="./images/features_performance.svg">
              Optimized to ensure maximum performance. Every millisecond counts.
            </FeatureBox>
            <FeatureBox title="Fully customizable" icon="./images/features_custom.svg">
              Customize from your banner text, design, location to CPC design according to your needs.
            </FeatureBox>
            <FeatureBox title="Easy to implement" icon="./images/features_implement.svg">
              Simply insert a javascript file in your website. <a href="" target="_blank">Find out more in our documentation.</a>
            </FeatureBox>
            <FeatureBox title="High transparency for users" icon="./images/features_transparent.svg">
              Simple and customizable user interface informs your user and allows cookie management on a granular level.
            </FeatureBox>
            <FeatureBox title="Adjustable to regulatory situation" icon="./images/features_adjust.svg">
              OIL gives you the flexibility to react to regulatory changes in the short term. Use OIL as an Opt-out tool either natively integrated into the privacy policy or displayed on a banner.
            </FeatureBox>
            <FeatureBox title="A/B testing capability" icon="./images/features_ab.svg">
              Improve your consent conversion by testing it.
            </FeatureBox>
          </div>
        </div>
        <GreyBackgroundPart type="bottom"/>
      </div>
    )
  }
}

export default Features;
