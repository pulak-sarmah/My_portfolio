const scrollUp = () => {
  //scroll up
  const scrollToTopButton = document.getElementById("scrollToTop");

  window.addEventListener("scroll", () => {
    const scrollPercentage =
      (window.scrollY / (document.body.scrollHeight - window.innerHeight)) *
      100;

    if (scrollPercentage > 15) {
      scrollToTopButton.classList.add("active");
    } else {
      scrollToTopButton.classList.remove("active");
    }
  });

  scrollToTopButton.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
};

export default scrollUp;
