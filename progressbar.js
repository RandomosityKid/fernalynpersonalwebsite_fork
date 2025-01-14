const skillContainer = document.querySelector(".header-text");
const percentageSpan = document.querySelectorAll(".percentage");

window.addEventListener('scroll', () => {
  if (document.documentElement.scrollTop >= skillContainer.offsetTop) {
    percentageSpan.forEach((percentage) => {
      percentage.style.width = percentage.getAttribute("data-width");
    });
  } else {
    percentageSpan.forEach((percentage) => {
      percentage.style.width = 0;
    });
  }
});