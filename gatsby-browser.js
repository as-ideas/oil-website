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
    var hash = window.location.hash;

    // do some scrolling if page was opened with hash-link
    if (hash) {
      window.setTimeout(
        function () {
          new SmoothScroll().animateScroll(
            document.querySelector(hash),
            null,
            {offset: 50}
          )
        }, 100);

    }

    new SmoothScroll('a[href*="#"]', {
      offset: function (anchor, toggle) {
        return 50;
      },
    });
  });
};
