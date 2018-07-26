import React from "react";

class LinkButton extends React.Component {

  render() {

    let href = this.props.href;
    if(!href && this.props.text === 'Sandbox') {
      href = 'https://oil.axelspringer.com/sandbox/';
    }
    if(!href && this.props.text === 'Github') {
      href = 'https://github.com/as-ideas/oil';
    }
    if(!href && this.props.text === 'Documentation') {
      href = 'https://oil.axelspringer.com/docs/';
    }

    return (
      <a className={this.props.cssClass} href={href} target="_blank">
        {this.props.text}
      </a>
    )
  }
}

export default LinkButton;
