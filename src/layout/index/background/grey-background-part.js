import React from "react";

require('./background.scss');

class GreyBackgroundPart extends React.Component {
  render() {
    return (
      <div className={"grey-element grey-" + this.props.type}></div>
    )
  }
}

export default GreyBackgroundPart;
