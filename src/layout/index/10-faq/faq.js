import React from "react";
import GreyBackgroundPart from '../background/grey-background-part';

require('./faq.scss');

class FaqEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {expanded: false}
  }

  toggle() {
    this.setState({expanded: !this.state.expanded});
  }

  render() {
    let currentClass = this.state.expanded ? "expanded" : "hidden";
    return <div className="faq-entry" onClick={this.toggle.bind(this)}>
      <div className="faq-entry__question">
        <div className="faq-entry-text">
          {this.props.post.frontmatter.title}
        </div>
        <div className={"faq-entry-expander " + currentClass}>
          <div className="faq-entry-round-expander"><img src={require('./arrow-down.svg')}/></div>
        </div>
      </div>
      <div className={"faq-entry__content " + currentClass} dangerouslySetInnerHTML={{__html: this.props.post.html}}/>
    </div>
  }
}

class Faq extends React.Component {

  render() {
    return (
      <div id="faq" className="faq section">
        <GreyBackgroundPart type="top"/>
        <div className="grey-background">
          <div className="faq-content section-content">
            <div className="faq-titles">
              <h6>SUPPORT</h6>
              <h2>Frequently Asked Questions</h2>
              <br/>
            </div>

            {this.props.entries.map(edge => <FaqEntry key={edge.node.id} post={edge.node}/>)}

            <div className="faq-entry">
              <div className="faq-entry__question">
                <div className="faq-entry__contact-us">
                  <div>If you still have question, don’t hesitate and contact us.</div>
                  <div className="faq-entry__contact-us__arrow">
                    <a href="&#109;&#97;&#105;&#108;&#116;&#111;&#58;&#111;&#105;&#108;&#045;&#115;&#117;&#112;&#112;&#111;&#114;&#116;&#64;&#97;&#115;&#105;&#100;&#101;&#97;&#115;&#46;&#100;&#101;">&#111;&#105;&#108;&#045;&#115;&#117;&#112;&#112;&#111;&#114;&#116;&#64;&#97;&#115;&#105;&#100;&#101;&#97;&#115;&#46;&#100;&#101;
                      <img src={require('./arrow.svg')}/></a>
                  </div>
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

export default Faq;
