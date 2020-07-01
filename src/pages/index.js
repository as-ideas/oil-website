import React from "react"
import Header from '../layout/header/header';
import Footer from '../layout/footer/footer';

import Hero from '../layout/index/01-hero/hero';

// import 'normalize.css';
// import './../layout/app.scss';

export default ({data}) => {

  return <div className="app-content">
    <Header/>

    <Hero/>

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
