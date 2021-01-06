export const toggleMenuEventListener = function () {
  showHideMobileNav();
};

const showHideMobileNav = function () {
  const imageContainer = document.querySelector(".container-image-mobile");
  imageContainer.classList.toggle("opacity0");
  const gradientOverlaydiv = document.querySelector("#gradient-overlay");
  gradientOverlaydiv.classList.toggle("container-next-gen--gradient-overlay");
  const nav = document.querySelector("nav");
  nav.classList.toggle("visible");
};
