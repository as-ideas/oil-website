import React from "react";
import LinkButton from '../index/button/link-button';

require('./header.scss');

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {expanded: false}
  }

  toggleMenu() {
    this.setState({expanded: !this.state.expanded});
  }


  hideMenu() {
    this.setState({expanded: false});
  }

  scrollTo(scrollToId) {

  }

  render() {
    return (
      <div id="header" className="header">
        <div className="header-content">
          <div className="header-logo">
            <div className="header-logo__image">
              <a href="/#header" className="home-link"><img src={require('./logo.svg')}/></a>
            </div>
            <div className="header-logo__text">
              <a href="/#header" className="home-link">oil.js</a>
            </div>
          </div>
          <div className="header-menu">
            <LinkButton text="Github" cssClass="menu-button"/>
          </div>
        </div>
        <div className="header__divider"/>
      </div>
    )
  }
}

export default Header
