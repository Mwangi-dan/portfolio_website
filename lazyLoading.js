function isMobileDevice() {
    return window.matchMedia('(max-width: 600px)').matches; // Change the breakpoint as needed
}

function lazyLoadImages() {
    const images = document.querySelectorAll('.screen img[loading="lazy"]');
    
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.removeAttribute('loading'); // Remove the "loading" attribute
          imageObserver.unobserve(img);
        }
      });
    }, options);
    
    images.forEach(img => imageObserver.observe(img));
}
  
  // Call the function to start lazy loading the images
  
  if (!isMobileDevice()){
    lazyLoadImages();
  }
