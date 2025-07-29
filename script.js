// callBtn
window.addEventListener("scroll", function () {
  const navBar = document.getElementById("navBar");

  // Change 50 to how many px you want before the nav changes color
  if (window.scrollY > 50) {
    navBar.classList.add("scrolled");
  } else {
    navBar.classList.remove("scrolled");
  }
});
