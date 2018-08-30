import React from "react";
import CollaborateLink from '../collaborate-link/collaborate-link';
import GreyBackgroundPart from '../background/grey-background-part';

require('./collaboration.scss');


class Collaboration extends React.Component {
  render() {
    return (
      <div id="collaboration" className="collaboration section">
        <GreyBackgroundPart type="top"/>
        <div className="grey-background">
          <div className="collaboration-content section-content">
            <div className="two-cols">
              <div id="collaboration-left" className="collaboration-left left">
                <h6>COLLABORATION</h6>
                <h2>Development</h2>

                <p>Engage and empower yourself or your development team by becoming a technical expert for consent management. Test-it, Feedback -it, Fork-it. Let’s fuel OIL together.</p>
                <div className="divider not-xs"/>
                <CollaborateLink/>
                <img className="some-image" src={require('./collaboration-dev2.png')}/>
              </div>
              <div className="collaboration-right right">
                <img className="some-image not-xs" src={require('./collaboration-dev.png')}/>
                <div className="collaboration-right__content">
                  <h6>COLLABORATION</h6>
                  <h2>Transparency & Consent Framework</h2>
                  <p>New ground rules for online advertising are currently developing. Want a say in shaping the future of online advertising or simply stay up-to-date? Sign up to our OIL working group!</p>
                  <div className="divider"/>
                  <CollaborateLink/>
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

export default Collaboration;
