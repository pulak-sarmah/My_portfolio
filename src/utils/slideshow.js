const slideShow = () => {
  const slideshows = document.querySelectorAll(".work__img-wrapper");

  slideshows.forEach(function (slideshow) {
    const slides = slideshow.querySelectorAll(".work__slide");
    let currentSlide = 0;

    function showSlide(index) {
      slides.forEach(function (slide, i) {
        slide.style.transform = `translateX(${(i - index) * 100}%)`;
      });
      currentSlide = index;
    }

    function nextSlide() {
      currentSlide = (currentSlide + 1) % slides.length;
      showSlide(currentSlide);
    }

    setInterval(nextSlide, 5000); // Change slide every 5 seconds
  });
};

export default slideShow;
