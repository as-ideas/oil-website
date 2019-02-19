import React from "react";

require('./quickstart.scss');


class Quickstart extends React.Component {
  render() {
    return (
      <div id="quickstart" className="quickstart section">
        <div className="quickstart-content section-content">
          <h6>DEVELOPER</h6>
          <h2>Quickstart</h2>
          <p>Setting up OIL on your page is easy and takes only three steps:</p>
          <ul className="fa-ul">
            <li><i className="fa fa-li fa-angle-right"/> Upload the OIL files to your site.</li>
            <li><i className="fa fa-li fa-angle-right"/> Add the oil.js javascript snippet to your page.</li>
            <li><i className="fa fa-li fa-angle-right"/> Add a configuration block to your page's DOM.</li>
          </ul>
          <p>If you want a more customized appearance of the layer, you can additionally</p>
          <ul className="fa-ul">
            <li><i className="fa fa-li fa-angle-right"/> Style your layer according to your style guide.</li>
            <li><i className="fa fa-li fa-angle-right"/> Create your own language pack.</li>
          </ul>
          <p>For details on how to do this please consult our <a href="http://oil.axelspringer.com/docs/#quickstart" target="_blank">Opt-in Layer Quickstart Guide</a>
            <br/>and you can find the <a href="https://oil.axelspringer.com/docs/last-release" target="_blank">latest documentation</a> online.
          </p>
        </div>
      </div>
    )
  }
}

export default Quickstart;
