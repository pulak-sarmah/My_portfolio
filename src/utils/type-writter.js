const typeWritter = () => {
  // JavaScript to implement the typewriter effect for the hero__title element
  const speed = 70;
  const headings = ["WEB DEVELOPER", "ML ENTHUSIAST", "FREELANCER"];
  let index = 0;

  function typeText() {
    const headingElement = document.getElementById("typewriter-heading");
    const currentHeading = headings[index];
    const text = currentHeading.slice(0, headingElement.textContent.length + 1);

    headingElement.innerHTML = text;

    if (text === currentHeading) {
      setTimeout(deleteText, 2000);
    } else {
      setTimeout(typeText, speed);
    }
  }

  function deleteText() {
    const headingElement = document.getElementById("typewriter-heading");
    const currentHeading = headings[index];
    const text = currentHeading.slice(0, headingElement.textContent.length - 1);

    headingElement.innerHTML = text;

    if (text === "") {
      index = (index + 1) % headings.length;
      setTimeout(typeText, 500);
    } else {
      setTimeout(deleteText, speed);
    }
  }

  // Start the typewriter effect
  typeText();
};

export default typeWritter;
