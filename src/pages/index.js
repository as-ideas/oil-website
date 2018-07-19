import React from "react"
import Header from '../layout/header/header';
import Footer from '../layout/footer/footer';
import Hero from '../layout/hero/hero';

import 'normalize.css';
import './../layout/app.scss';
import Product from '../layout/product/product';
import Features from '../layout/features/features';
import Faq from '../layout/faq/faq';
import Collaboration from '../layout/collaboration/collaboration';
import AboutUs from '../layout/aboutus/aboutus';
import Press from '../layout/press/press';
import Support from "../layout/support/support";

export default ({data}) => {

  return <div>
    <Header/>

    <Hero/>
    <Product/>
    <Features/>
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
