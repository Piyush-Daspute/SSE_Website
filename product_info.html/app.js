const buttons = document.querySelectorAll('.info-button');
const modals = document.querySelectorAll('.modal');
const closeBtns = document.querySelectorAll('.close-btn');
const mobileMenu = document.getElementById("mobile-menu");
const navLinks = document.querySelector(".nav-links");

mobileMenu.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const modalId = button.getAttribute('data-modal');
    document.getElementById(modalId).style.display = 'block';
  });
});

closeBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    btn.closest('.modal').style.display = 'none';
  });
});

window.addEventListener('click', e => {
  modals.forEach(modal => {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  });
});

const img = document.getElementById("product-image");
const result = document.getElementById("zoom-result");

  result.style.backgroundImage = `url('${img.src}')`;

  img.addEventListener("mousemove", moveLens);
  result.addEventListener("mousemove", moveLens);
  img.addEventListener("mouseleave", () => result.style.display = "none");
  img.addEventListener("mouseenter", () => result.style.display = "block");

  function moveLens(e) {
    const pos = getCursorPos(e);
    const x = pos.x;
    const y = pos.y;

    const imgWidth = img.width;
    const imgHeight = img.height;

    const resultWidth = result.offsetWidth;
    const resultHeight = result.offsetHeight;

    const cx = resultWidth / imgWidth;
    const cy = resultHeight / imgHeight;

    const bgX = -x * cx + resultWidth / 2;
    const bgY = -y * cy + resultHeight / 2;

    result.style.backgroundPosition = `${bgX}px ${bgY}px`;
  }

  function getCursorPos(e) {
    const a = img.getBoundingClientRect();
    const x = e.pageX - a.left - window.pageXOffset;
    const y = e.pageY - a.top - window.pageYOffset;
    return { x, y };
  }