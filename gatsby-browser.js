import {anchorate} from 'anchorate'

exports.onRouteUpdate = () => {
  anchorate({
    scroller: function (element) {
      if (!element) {
        return false;
      }
      element.scrollIntoView({behavior: 'smooth', block: 'start'});
      return true;
    }
  })
};

// cf. https://github.com/cferdinandi/smooth-scroll && cf. src/html.js:42 for CDN including
exports.onClientEntry = () => {
  document.addEventListener("DOMContentLoaded", function (event) {

    // do some scrolling if page was opened with hash-link
    if (window.location.hash) {
      new SmoothScroll().animateScroll(
        document.querySelector(window.location.hash),
        null,
        {offset: -50}
      );
    }

    new SmoothScroll('a[href*="#"]', {
      offset: function (anchor, toggle) {
        return 50;
      },
    });
  });
};
