import React from "react";
import CollaborateLink from '../collaborate-link/collaborate-link';

require('./collaboration.scss');


class Collaboration extends React.Component {
  render() {
    return (
      <div id="collaboration" className="collaboration section">
        <div className="collaboration-image__containter">
          <img className="collaboration-image" src={require('./badmovie.jpg')}/>
        </div>
        <div className="collaboration-content section-content">
          <div className="two-cols">
            <div id="collaboration" className="collaboration-left left">
              <h6>COLLABORATION</h6>
              <h2>Development</h2>

              <p>Engage and empower yourself or your development team by becoming a technical expert for consent management. Test-it, Feedback -it, Fork-it. Let’s fuel OIL together.</p>
              <div className="divider"/>
              <CollaborateLink/>
              <img className="some-image" src={require('./oil-dev-caffee.gif')}/>
            </div>
            <div className="collaboration-right right">
              <img className="some-image" src={require('./oil-development.jpg')}/>
              <div className="collaboration-right__content">
                <h6>COLLABORATION</h6>
                <h2>Transparency &
                  Consent Framework</h2>

                <p>Engage and empower yourself or your development team by becoming a technical expert for consent management. Test-it, Feedback -it, Fork-it. Let’s fuel OIL together.</p>
                <div className="divider"/>
                <CollaborateLink/>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Collaboration;
