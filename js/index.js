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
  const parts = document.querySelectorAll(".go-to-ig-part, .go-to-ig-part2");
  const roots = document.querySelectorAll(".go-to-ig-root");
  const scrollContainers = document.querySelectorAll(".go-to-ig-scroll, .go-to-ig-scroll2");
  
  parts.forEach((part, index) => {
    const root = roots[index];
    const scrollContainer = scrollContainers[index];
  
    const partWidth = part.clientWidth;
  
    scrollContainer.style.width = `${partWidth}px`;
  
    if (part.classList.contains('go-to-ig-part')) {
      scrollContainer.style.animationName = "scroll";
    } else if (part.classList.contains('go-to-ig-part2')) {
      scrollContainer.style.animationName = "scroll-reverse";
    }
  
    const partClons = [];
  
    const updatePartCount = _.throttle(function () {
      const rootWidth = root.clientWidth;
      const cloneCount = Math.floor(rootWidth / partWidth);
  
      if (cloneCount > partClons.length) {
        const addCount = cloneCount - partClons.length;
  
        [...Array(addCount)].forEach(() => {
          const newNode = part.cloneNode(true);
          partClons.push(newNode);
          scrollContainer.appendChild(newNode);
        });
      }
  
      if (cloneCount < partClons.length) {
        const removeCount = partClons.length - cloneCount;
  
        [...Array(removeCount)].forEach(() => {
          const oldNode = partClons.pop();
          scrollContainer.removeChild(oldNode);
        });
      }
    }, 200);
  
    updatePartCount();
  
    window.addEventListener('resize', updatePartCount);
  });
});




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
