'use strict';

(function() {
  function init() {
    let router = new Router([
      new Route('home', 'home.html', true),
      new Route('art', 'art.html'),
      new Route('product_info', 'product_info.html')
    ]);
  }
  init();
}());


// $('#lol').click(function() {
//   $('p').css('color', 'red');
// });