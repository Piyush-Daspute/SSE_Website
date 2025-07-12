// shared/js/load-navbar.js
fetch("navbar.html")
  .then(res => res.text())
  .then(data => {
    document.getElementById("navbar-placeholder").innerHTML = data;

    // Re-attach event listener after DOM is inserted
    const mobileMenu = document.getElementById("mobile-menu");
    const navLinks = document.querySelector(".nav-links");
    if (mobileMenu) {
      mobileMenu.addEventListener("click", () => {
        navLinks.classList.toggle("active");
      });
    }
  });
