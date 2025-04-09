// Get the header element
const header = document.querySelector(".header");

// Get the initial offset position of the header
const sticky = header.offsetTop;

// Function to make header sticky on scroll
function makeHeaderSticky() {
  if (window.scrollY > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

// Add scroll event listener
window.addEventListener("scroll", makeHeaderSticky);
