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


const toggleButtons = document.querySelectorAll('input[type="checkbox"][id="togglemode"]');
const html = document.documentElement;

// On page load: apply saved theme
const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
  html.setAttribute("data-theme", savedTheme);
  // Set checkbox state
  toggleButtons.forEach(btn => {
    btn.checked = savedTheme === "dark";
  });
}

// Add event listeners to all toggle buttons
toggleButtons.forEach(button => {
  button.addEventListener("change", () => {
    const newTheme = button.checked ? "dark" : "light";
    html.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);

    // Sync all other checkboxes
    toggleButtons.forEach(btn => {
      btn.checked = button.checked;
    });
  });
});
