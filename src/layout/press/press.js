import React from "react";

require('./press.scss');


const PressEntry = (props) => {
  return <a className="press-entry" href={props.post.frontmatter.link} target="_blank">
    <div className="press-entry__text" dangerouslySetInnerHTML={{__html: props.post.frontmatter.title}}/>
    <div className="press-entry__arrow"><img src={require('./arrow.svg')}/></div>
  </a>
};

class Press extends React.Component {
  render() {
    return (
      <div className="press section grey-background">
        <div className="press-content section-content">
          <div className="press-titles">
            <h2>Press</h2>
          </div>
          {this.props.entries.map(edge => <PressEntry key={edge.node.id} post={edge.node}/>)}
        </div>
      </div>
    )
  }
}

export default Press;
