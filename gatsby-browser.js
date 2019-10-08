/**
 * HINT: gatsby-browser.js is loaded at the root of your site
 */
import {anchorate} from 'anchorate'

import 'normalize.css';
import './src/layout/app.scss';

export function onRouteUpdate  ()  {
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

// cf. https://github.com/cferdinandi/smooth-scroll
export function onClientEntry  ()  {
  enableSmoothScolling();
  loadDeferedStyles();
};


// cf. https://developers.google.com/speed/docs/insights/OptimizeCSSDelivery
function loadDeferedStyles() {
  var loadDeferredStyles = function () {
    var addStylesNode = document.getElementById("deferred-styles");
    var replacement = document.createElement("div");
    replacement.innerHTML = addStylesNode.textContent;
    document.body.appendChild(replacement);
    addStylesNode.parentElement.removeChild(addStylesNode);
  };

  var raf = window.requestAnimationFrame || window.mozRequestAnimationFrame ||
    window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
  if (raf) {
    raf(function () {
      window.setTimeout(loadDeferredStyles, 0);
    });
  } else {
    window.addEventListener('load', loadDeferredStyles);
  }
}

function enableSmoothScolling() {
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

    // Find all Links an add smoothscrolling with a little offset
    new SmoothScroll('a[href*="#"]', {
      offset: function (anchor, toggle) {
        return 50;
      },
    });
  });
}
