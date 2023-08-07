import "../styles/modern-normalize.css";
import "../styles/style.css";
import "../styles/components/header.css";
import "../styles/components/hero.css";
import "../styles/components/about.css";
import "../styles/components/education.css";
import "../styles/components/experience.css";
import "../styles/components/work.css";
import "../styles/components/contact.css";
import "../styles/components/footer.css";
import "../styles/components/mobile-nav.css";
import "../styles/utils.css";

import mobileNav from "./utils/mobile-nav";
import darkMode from "./utils/dark-mode";
import animation from "./utils/load-animation";
import typeWritter from "./utils/type-writter";
import slideShow from "./utils/slideshow";
import scrollUp from "./utils/scroll-up";
import lazyLoad from "./utils/lazy-loading";

lazyLoad();
document.addEventListener("DOMContentLoaded", function () {
  mobileNav();
  darkMode();
  animation();
  typeWritter();
  slideShow();
  scrollUp();
});
