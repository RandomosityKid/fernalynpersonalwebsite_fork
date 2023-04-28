let mybutton = document.getElementById("arrow-up-button");

window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  // Display the "up" button when scrolling down
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
    mybutton.style.transition = '5s ease';
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

// Tab navigation
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
  // Switch between active tabs and tab contents
  for (tablink of tablinks) {
    tablink.classList.remove("active-link");
  }
  for (tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}

// Side menu
var sidemenu = document.getElementById("side-menu");

function openMenu() {
  // Open the side menu
  sidemenu.style.right = "0px";
}

function closeMenu() {
  // Close the side menu
  sidemenu.style.right = "-200px";
}

// Scroll to top when leaving the page
window.addEventListener('beforeunload', function() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });