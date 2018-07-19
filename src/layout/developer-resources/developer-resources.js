import React from "react";
import GreyBackgroundPart from '../background/grey-background-part';

require('./developer-resources.scss');

const ResourceBox = (props) => {
  if (props.title) {
    return <div className="developer-resource-box">
      <div className="icon">
        <div className="icon-round"><i className={props.icon}/></div>
      </div>
      <div>
        <h4><a href={props.url} target="_blank">{props.title}</a></h4>
        <p>{props.children}</p>
      </div>
    </div>
  } else {
    return <div className="developer-resource-box"/>
  }
};

class DeveloperResources extends React.Component {
  render() {
    return (
      <div id="developer-resources" className="developer-resources section">
        <GreyBackgroundPart type="top"/>
        <div className="grey-background">
          <div className="developer-resources-headlines section-content">
            <h6>DEVELOPER</h6>
            <h2>Resources</h2>
          </div>
          <div className="developer-resources-content section-content">
            <ResourceBox title="Sandbox" url="http://oil.axelspringer.com/sandbox/" icon="far fa-eye">
              See an interactive demonstration of the main features the Opt-in Layer provides.
            </ResourceBox>
            <ResourceBox title="GitHub" url="https://github.com/as-ideas/oil" icon="fab fa-github">
              Find the Opt-in Layer sources on GitHub. Download it and study the code. It's open source under <a href="https://github.com/as-ideas/oil/blob/master/LICENSE" target="_blank">GPL 2.0</a>.
            </ResourceBox>
            <ResourceBox title="Released Versions" url="http://oil.axelspringer.com/release/" icon="fas fa-box-open">
              Find current and past releases of the Opt-in Layer, ready for download and integration.
            </ResourceBox>
            <ResourceBox title="Documentation" url="http://oil.axelspringer.com/docs/" icon="far fa-file-alt">
              Read our documentation to go deeper into the Opt-in Layer, its integration, configuration and customization.
            </ResourceBox>
            <ResourceBox title="Examples" url="http://oil.axelspringer.com/demos/" icon="fas fa-boxes">
              See different example pages demonstrating several aspects of Opt-in Layer integration.
            </ResourceBox>
            <ResourceBox/>
          </div>
        </div>
        <GreyBackgroundPart type="bottom"/>
      </div>
    )
  }
}

export default DeveloperResources;
