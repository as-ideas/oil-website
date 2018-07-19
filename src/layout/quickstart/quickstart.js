import React from "react";

require('./quickstart.scss');


class Quickstart extends React.Component {
  render() {
    return (
      <div id="quickstart" className="quickstart section">
        <div className="quickstart-image__container">
          <img className="quickstart-image" src={require('./badmovie.jpg')}/>
        </div>
        <div className="quickstart-content section-content">
          <h6>DEVELOPER</h6>
          <h2>Quickstart</h2>
          <p>Setting up OIL on your page is comparatively easy. Only three steps are necessary:</p>
          <ul className="fa-ul">
            <li><i className="fa fa-li fa-angle-right"/> Install OIL on a host of your site.</li>
            <li><i className="fa fa-li fa-angle-right"/> Add the oil.js javascript snippet to your page.</li>
            <li><i className="fa fa-li fa-angle-right"/> Add a configuration block to your pages DOM.</li>
          </ul>
          <p>If you want a more customized appearance of the layer, you can additionally</p>
          <ul className="fa-ul">
            <li><i className="fa fa-li fa-angle-right"/> Style your layer according to your style guide.</li>
            <li><i className="fa fa-li fa-angle-right"/> Create your own language pack.</li>
          </ul>
          <p>For details how to do this please take a look into our <a href="http://oil.axelspringer.com/docs/#quickstart" target="_blank">Opt-in Layer Quickstart Guide</a>.</p>
        </div>
      </div>
    )
  }
}

export default Quickstart;
