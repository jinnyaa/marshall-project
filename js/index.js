AOS.init();

// go-to-top
document.addEventListener('DOMContentLoaded', function () {
  const goToTopButton = document.getElementById('go-to-top');

  function scrollToTop() {
      window.scrollTo({
          top: 0,
          behavior: 'smooth' 
      });
  }

  goToTopButton.addEventListener('click', function (event) {
      event.preventDefault(); 
      scrollToTop();
  });
});


// main-img
document.addEventListener('DOMContentLoaded', () => {
  const mainImgDelay = document.querySelectorAll('.main-img-box li');

  mainImgDelay.forEach((li) => {
      const delay = li.getAttribute('data-delay'); 

      setTimeout(() => {
          li.style.opacity = 1;
      }, delay);
  });
});



// main-bg
document.addEventListener('DOMContentLoaded', () => {
  let cursor = document.querySelector('.main-bg');
  let mouseX = 0, mouseY = 0;
  let posX = 0, posY = 0;
  let speed = 0.05; 

  document.addEventListener('mousemove', (e) => {
    mouseX = e.pageX;
    mouseY = e.pageY;
  });

  function animate() {
    posX += (mouseX - posX) * speed;
    posY += (mouseY - posY) * speed;

    cursor.style.left = posX + 'px';
    cursor.style.top = posY + 'px';

    requestAnimationFrame(animate);
  }

  animate();
});



// instagram slide
$(document).ready(function(){
  $slides = $('.go-to-ig-slide');
  $slides2 = $('.go-to-ig-slide2');
  
  $slides.bind('contentchanged', function(){
      animate($slides);
  });
  animate($slides);

  $slides2.bind('contentchanged', function(){
      animateReverse($slides2);
  });
  animateReverse($slides2);
});

function animate($slides){
  var slidesLength = $slides.find('li').length;
  if(slidesLength > 3){
      $slides.find('li:nth-last-child(-n+3)').clone().prependTo($slides);
      $slides.addClass('animate');
      $slides.css('animation-duration', slidesLength * 2 + 's');
  }
}

function animateReverse($slides2){
  var slidesLength2 = $slides2.find('li').length;
  if(slidesLength2 > 3){
      $slides2.find('li:nth-last-child(-n+3)').clone().prependTo($slides2);
      $slides2.addClass('animate2');
      $slides2.css('animation-duration', slidesLength2 * 2 + 's');
  }
}


// footer menu toggle
$(document).ready(function() {
  function handleMenuToggle() {
      if (window.innerWidth >= 1024) {
          $('.footer-menu').off('click');
      } else {
          $('.footer-menu').off('click').on('click', function(e) {
              $(this).find('ul').toggleClass('toggleOn');
              $(this).siblings().find('ul').removeClass('toggleOn');
              $(this).find('.toggle-icon i:last-child').toggleClass('toggleOn');
              $(this).siblings().find('.toggle-icon i:last-child').removeClass('toggleOn');
              $(this).find('.toggle-icon i:first-child').toggleClass('toggleOn');
              $(this).siblings().find('.toggle-icon i:first-child').removeClass('toggleOn');
          });
      }
  }

  handleMenuToggle();

  $(window).resize(function() {
      handleMenuToggle();
  });
});



// spotlight-next-btn
document.addEventListener('DOMContentLoaded', function () {
  const scrollWrapper = document.querySelector('.scrolling-wrapper');
  const scrollLeftButton = document.getElementById('scroll-left');
  const scrollRightButton = document.getElementById('scroll-right');
  
  const scrollAmount = scrollWrapper.clientWidth * 0.5; 
  function scrollLeft() {
      scrollWrapper.scrollBy({
          left: -scrollAmount,
          behavior: 'smooth'
      });
  }

  function scrollRight() {
      scrollWrapper.scrollBy({
          left: scrollAmount,
          behavior: 'smooth'
      });
  }

  scrollLeftButton.addEventListener('click', function (event) {
      event.preventDefault();
      scrollLeft();
  });

  scrollRightButton.addEventListener('click', function (event) {
      event.preventDefault();
      scrollRight();
  });
});
