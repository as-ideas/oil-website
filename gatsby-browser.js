import { anchorate } from 'anchorate'
exports.onRouteUpdate = () => {
  anchorate()
}

exports.onClientEntry = () => {
  document.addEventListener("DOMContentLoaded", function (event) {
    new SmoothScroll('a[href*="#"]');
  });

};
