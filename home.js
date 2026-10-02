document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll(".navbar-nav .nav-link");
  const navbarCollapse = document.getElementById("navbarNav");

  // Cierra automáticamente el menú en móviles al hacer clic en cualquier sección
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (navbarCollapse.classList.contains("show")) {
        const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
        if (bsCollapse) {
          bsCollapse.hide();
        }
      }
    });
  });
});