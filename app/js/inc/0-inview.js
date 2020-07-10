function inView(el) {
  var rect = el.getBoundingClientRect();
  var elemTop = rect.top;
  var elemBottom = rect.bottom;

  // Only completely visible elements return true:
  // var isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);
  // Partially visible elements return true:
  isVisible = elemTop < window.innerHeight && elemBottom >= 0;
  return isVisible;
}

function inViewAnimate(selector){
  var e = document.querySelector(selector);
  var c = "animated";

  if (inView(e)) {
    e.classList.add(c);
  }
}


var animateScroll = function(selector) {
  inViewAnimate(selector);

  window.addEventListener('scroll', function(){ 
    inViewAnimate(selector);
  }, false);
};
