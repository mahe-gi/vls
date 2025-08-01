// Navbar scroll color change
window.addEventListener("scroll", function () {
  const navBar = document.getElementById("navBar");

  // Add 'scrolled' class after scrolling down 50px
  if (window.scrollY > 50) {
    navBar.classList.add("scrolled");
  } else {
    navBar.classList.remove("scrolled");
  }
});

// FAQ accordion toggle functionality
document.querySelectorAll(".faq-question").forEach((btn) => {
  btn.addEventListener("click", function () {
    const item = btn.parentElement;
    // Toggle current item
    item.classList.toggle("active");

    // Close others (accordion behavior)
    document.querySelectorAll(".faq-item").forEach((other) => {
      if (other !== item) other.classList.remove("active");
    });
  });
});

const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});
