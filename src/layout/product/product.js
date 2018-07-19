import React from "react";
import CollaborateLink from '../collaborate-link/collaborate-link';

require('./product.scss');


class Product extends React.Component {
  render() {
    return (
      <div id="product" className="product section">
        <div className="product-content section-content">
          <div className="two-cols">
            <div className="product-left left">
              <h6>product</h6>
              <h2>What is OIL?</h2>
              <p>OIL (Opt-in and Transparency Layer) is an open source consent management platform that enables your compliance with GDPR and ePrivacy. The platform allows the user to manage their consent for data processing transparently and subsequently signals this information across the advertising supply chain as well as any other custom vendor list.
                Technically, it supports the technical standard of the IAB Transparency and Consent Framework (“TCF”) as well as provides its own Events or JavaScript API for any vendor not covered by the TCF.
                The highly customizable OIL solution is adaptable to any regulatory changes. Once implemented it can be easily switched from opt-out to opt-in scenario.</p>

              <div className="product-list-box">
                <h3>Why Open Source?
                </h3>
                <p>Instead of leveraging OIL commercially, we decided to make it available open source. These are our main reasons:</p>

                <div className="divider"/>
                <div className="list-element">
                  <div className="icon">
                    <div className="blue-number">1</div>
                  </div>
                  <p>Collaboration drives technical excellence – Let’s pool our technical skills and develop a solution of the highest quality through feedback and knowledge exchange. </p>
                </div>
                <div className="divider"/>
                <div className="list-element">
                  <div className="icon">
                    <div className="blue-number">2</div>
                  </div>
                  <p>Best practice UI/UX – Collaboration between legal teams and product experts sets an industry standard for a compliant yet user-friendly interface.</p>
                </div>
                <div className="divider"/>
                <div className="list-element">
                  <div className="icon">
                    <div className="blue-number">3</div>
                  </div>
                  <p>United voices are louder – Join the discussions about the <a href="http://advertisingconsent.eu/" target="_blank">IAB Transparency and Consent Framework</a> from a publisher’s perspective and help forming the ground rules for online advertising post-GDPR.
                  </p>
                </div>
                <div className="divider"/>

                <div>
                  <CollaborateLink/>
                </div>

              </div>

            </div>

            <div className="product-right right">
              <img className="product-image" src={require('./privacy-policy.jpg')}/>
              <p>Examples include:</p>

              <ul className="product-examples">
                <li>Opt-out tool: Natively integrated into the privacy policy, with / without cookie banner, opt-in as default</li>
                <li>Information banner: Only display cookie banner, link to privacy policy</li>
                <li>Opt-in tool: Natively integrated into the privacy policy, with cookie banner, opt- out as default</li>
              </ul>

              <div className="product-list-box">
                <h3>Why OIL?</h3>
                <p>There are many reasons why we believe it is best for you to implement OIL and become an active collaborator. Here are just a few:</p>

                <div className="divider"/>
                <div className="list-element">
                  <div className="icon">
                    <div className="green-checkmark">✓</div>
                  </div>
                  <p>Protect your core business - Your core business is directly affected. Take control and decide on features, timeline, product design and many more yourself.</p>
                </div>
                <div className="divider"/>
                <div className="list-element">
                  <div className="icon">
                    <div className="green-checkmark">✓</div>
                  </div>
                  <p>Apply your interpretation of the law – Under GDPR many national laws are still in effect. Configure OIL to reflect your legal basis and preserve your independence.</p>
                </div>
                <div className="divider"/>
                <div className="list-element">
                  <div className="icon">
                    <div className="green-checkmark">✓</div>
                  </div>
                  <p>Actively shape the new standard in online advertising - OIL provides your technical team with the opportunity to build the expertise necessary to follow and feedback on the development of IAB’s Transparency & Consent Framework. Take action now. Once the standard has formed it will be too late.</p>
                </div>
              </div>


            </div>
          </div>


        </div>
      </div>
    )
  }
}

export default Product;
