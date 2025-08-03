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

const callBtn = document.getElementById("bookConsuktationBtn");
callBtn.addEventListener("click", () => {
  window.open("https://wa.me/+919492864455?text=hi", "_blank");
});

const contactBtn = document.getElementById("contactBtn");
contactBtn.addEventListener("click", () => {
  window.open("tel:+919492864455");
});

const ctabtn = document.getElementById("cta");
ctabtn.addEventListener("click", () => {
  window.open("tel:+919492864455");
});

const follower = document.querySelector(".cursor-follower");
let mouseX = 0;
let mouseY = 0;
let posX = 0;
let posY = 0;
document.addEventListener("mousemove", (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

function animate() {
  posX += (mouseX - posX) * 0.1;
  posY += (mouseY - posY) * 0.1;

  follower.style.left = posX + "px";
  follower.style.top = posY + "px";

  requestAnimationFrame(animate);
}

animate();

const sendmsg = document.getElementById("send-form");
sendmsg.addEventListener("click", () => {
  senMsg();

  window.open("https://wa.me/+919492864455?text=hi", "_blank");
});

function senMsg() {
  console.log("sdf");
  const name = document.getElementById("name-form").value.trim();
  const phone = document.getElementById("phone-form").value.trim();
  const message = document.getElementById("message-form").value.trim();
  const defaultMessage = `Hello, I am ${name}.\nPhone: ${phone}\nMessage: ${message}`;
  const whatsappNumber = "+919492864455";
  const encodedMessage = encodeURIComponent(defaultMessage);
  const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
  window.open(whatsappURL, "_blank");
}
