import React from "react";
import GreyBackgroundPart from '../background/grey-background-part';
import LinkButton from '../button/link-button';

require('./hero.scss');

class Hero extends React.Component {
  render() {
    return (
      <div id="hero" className="hero section">
        <GreyBackgroundPart type="top"/>
        <div className="grey-background">
          <div className="hero-content section-content">
            <div className="two-cols">
              <div className="hero-left left">
                <h1>OIL has been deprecated.</h1>
                <p>
                  We very much regret that we, the previous OIL development team, are no longer able to support the OIL project with
                  immediate effect. It will not be developed any further by us and we will not provide any bugfixes or security patches from
                  now on. As an open source project it will remain available. If you want to take over the project as a maintainer, please
                  file an issue on the OIL GitHub project.
                </p>
                <p>
                  For this reason OIL.js is no longer a registered CMP and does not support TCF v2.0. If you want to continue using OIL or
                  develop it further, please register yourself at <a href={"https://iabeurope.eu/tcf-for-cmps/"}>IAB</a>.
                </p>
                <LinkButton text="Github" cssClass="hero-button dark-blue-design"/>
                <div className="hero-image">
                  <img src={require('./images/section-hero.png')}/>
                </div>
              </div>
            </div>
          </div>
        </div>
        <GreyBackgroundPart type="bottom"/>
      </div>
    )
  }
}

export default Hero;
