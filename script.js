const images = [
    'url(gyana.jpg)',
    'url(download.jpg)',
    'url(img3.jpg)'
  ];
  let currentIndex = 0;

  function changeBackground() {
    const container = document.querySelector('.background-slider');
    container.style.backgroundImage = images[currentIndex];
    currentIndex = (currentIndex + 1) % images.length;
  }

  // Change background every 5 seconds (5000 milliseconds)
  setInterval(changeBackground, 5000);
  
  // Initial call to set the first background image
  changeBackground();
  
  document.addEventListener('DOMContentLoaded', function() {
    const options = {
      strings: ['Hello, World!', 'Welcome to Typed.js!', 'This is a typing animation.'],
      typeSpeed: 50,
      backSpeed: 25,
      backDelay: 1000,
      startDelay: 500,
      loop: true,
      showCursor: true,
    };

    let gyana=new Typed('#element', options);
  });