import React from "react"

// import 'normalize.css';
// import './../layout/app.scss';

import Header from '../layout/header/header';
import Footer from '../layout/footer/footer';

import Hero from '../layout/index/01-hero/hero';
import Product from '../layout/index/02-product/product';
import Features from '../layout/index/03-features/features';
import ProductImageSlider from "../layout/index/04-product-image-slider/product-image-slider";
import Quickstart from '../layout/index/05-quickstart/quickstart';
import DeveloperResources from '../layout/index/06-developer-resources/developer-resources';
import TechnicalDetails from '../layout/index/07-technical-details/technical-details';
import Collaboration from '../layout/index/08-collaboration/collaboration';
import Support from "../layout/index/09-support/support";
import Faq from '../layout/index/10-faq/faq';
import AboutUs from '../layout/index/11-aboutus/aboutus';
import Press from '../layout/index/12-press/press';

export default ({data}) => {

  return <div className="app-content">
    <Header/>

    <Hero/>
    <Product/>
    <Features/>
    <ProductImageSlider/>
    <Quickstart/>
    <DeveloperResources/>
    <TechnicalDetails/>
    <Collaboration/>
    <Support/>
    <Faq entries={data.faq.edges}/>
    <AboutUs/>
    <Press entries={data.press.edges}/>

    <Footer/>
  </div>
};

export const pageQuery = graphql`
  query IndexQuery {
    faq: allMarkdownRemark(
     filter: { fileAbsolutePath: {regex : "\\/faq/"} },
     sort: { order: ASC, fields: [fileAbsolutePath] },
    ) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          html
          frontmatter {
            title
          }
        }
      }
    }
    press: allMarkdownRemark(
       filter: { fileAbsolutePath: {regex : "\\/press/"} },
       sort: { order: ASC, fields: [fileAbsolutePath] },
      ) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          html
          frontmatter {
            title
            link
          }
        }
      }
    }
  }
`;
