import React from "react";
import LinkButton from '../button/link-button';

require('./header.scss');

const MenuEntry = ({link, text, onClick}) => {
  return <a data-scroll className="menu-entry" href={link} onClick={onClick}>
    {text}
  </a>
};

const IconBurger = ({className}) => (
  <svg className={className} width="20" height="15" viewBox="0 0 20 15">
    <path fillRule="evenodd" d="M1.25,6 L18.75,6 C19.4403559,6 20,6.55964406 20,7.25 C20,7.94035594 19.4403559,8.5 18.75,8.5 L1.25,8.5 C0.559644063,8.5 8.45442189e-17,7.94035594 0,7.25 C-8.45442189e-17,6.55964406 0.559644063,6 1.25,6 Z M1.25,12 L18.75,12 C19.4403559,12 20,12.5596441 20,13.25 C20,13.9403559 19.4403559,14.5 18.75,14.5 L1.25,14.5 C0.559644063,14.5 8.45442189e-17,13.9403559 0,13.25 C-8.45442189e-17,12.5596441 0.559644063,12 1.25,12 Z M1.25,0 L18.75,0 C19.4403559,-1.26816328e-16 20,0.559644063 20,1.25 C20,1.94035594 19.4403559,2.5 18.75,2.5 L1.25,2.5 C0.559644063,2.5 8.45442189e-17,1.94035594 0,1.25 C-8.45442189e-17,0.559644063 0.559644063,1.26816328e-16 1.25,0 Z"/>
  </svg>
);

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
            <MenuEntry text="Product" link="/#product"/>
            <MenuEntry text="Developer" link="/#quickstart"/>
            <MenuEntry text="Collaboration" link="/#collaboration"/>
            <MenuEntry text="Support" link="/#support"/>
            <MenuEntry text="About us" link="/#aboutus"/>

            <LinkButton text="Sandbox" cssClass="menu-button blue-design"/>
            <LinkButton text="Github" cssClass="menu-button"/>

            <li className='header-menu__burger-toggle' onClick={this.toggleMenu.bind(this)}>
              <IconBurger/>
            </li>
          </div>
        </div>
        <div className="header__divider"/>

        {
          (this.state.expanded ?
            <div className="burger-menu-content">
              <div className="burger-menu-content__list">
                <MenuEntry text="Product" link="/#product" onClick={this.hideMenu.bind(this)}/>
                <MenuEntry text="Developer" link="/#quickstart" onClick={this.hideMenu.bind(this)}/>
                <MenuEntry text="Collaboration" link="/#collaboration" onClick={this.hideMenu.bind(this)}/>
                <MenuEntry text="Support" link="/#support" onClick={this.hideMenu.bind(this)}/>
                <MenuEntry text="About us" link="/#aboutus" onClick={this.hideMenu.bind(this)}/>
              </div>
            </div>
            : '')
        }
      </div>
    )
  }
}

export default Header
