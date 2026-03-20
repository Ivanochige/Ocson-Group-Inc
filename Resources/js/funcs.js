/* ================================ ADDING CSS CLASS ON LINKS ================================ */
//Adding CSS Class//
window.addEventListener("DOMContentLoaded", () => {

    const navLinks = document.querySelectorAll('.sidebar ul li a');
    const currentPage = window.location.pathname.split('/').pop();

    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href');

        if (linkPage === currentPage || (currentPage === '' && linkPage === 'index.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });

});
//End of CSS Class//  

/* ================================ USER MODAL SYSTEM (GLOBAL SAFE) ================================ */

// ===== GLOBAL FUNCTIONS =====
function getUserModal() {
  return document.getElementById("user-Module");
}

function openUserModule() {
  const modal = getUserModal();
  if (!modal) return;

  modal.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeUserModule() {
  const modal = getUserModal();
  if (!modal) return;

  modal.classList.remove("active");
  document.body.style.overflow = "auto";
}

function createUser() {
  openUserModule();
}

// Explicitly attach to window (extra safety)
window.createUser = createUser;
window.openUserModule = openUserModule;
window.closeUserModule = closeUserModule;

// ===== EVENT DELEGATION =====

// Close when clicking overlay
document.addEventListener("click", (e) => {
  const modal = getUserModal();
  if (modal && e.target === modal) {
    closeUserModule();
  }
});

// Close with ESC
document.addEventListener("keydown", (e) => {
  const modal = getUserModal();
  if (modal && e.key === "Escape" && modal.classList.contains("active")) {
    closeUserModule();
  }
});

// Handle form submit dynamically
document.addEventListener("submit", (e) => {
  if (e.target && e.target.id === "userform") {
    e.preventDefault();
    closeUserModule();
  }
});

/* ================================ ADD A CUSTOMER ================================ */