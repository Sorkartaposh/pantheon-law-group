// sidebar script
function toggleOffcanvas() {
    const offcanvas = document.getElementById('offcanvas');
    const backdrop = document.getElementById('offcanvas-backdrop');
    const hamburgerIcon = document.getElementById('hamburger-icon');

    offcanvas.classList.toggle('show');
    backdrop.classList.toggle('show');

    hamburgerIcon.classList.toggle('fa-bars');
    hamburgerIcon.classList.toggle('fa-times');
}

document.getElementById('offcanvas-backdrop').addEventListener('click', toggleOffcanvas);

// sticky header script
let prevScrollPos = window.pageYOffset;
let ticking = false;

window.addEventListener('scroll', function () {
  if (!ticking) {
    window.requestAnimationFrame(function () {
      let currentScrollPos = window.pageYOffset;
      const header = document.getElementById("headersticky");

      if (prevScrollPos > currentScrollPos) {
        header.style.transform = "translateY(0)";
      } else {
        header.style.transform = "translateY(-113px)";
      }

      prevScrollPos = currentScrollPos;
      ticking = false;
    });

    ticking = true;
  }
});