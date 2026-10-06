document.addEventListener("DOMContentLoaded", () => {
  // --- 1. Control de la barra de navegación ---
  const navLinks = document.querySelectorAll(".navbar-nav .nav-link");
  const navbarCollapse = document.getElementById("navbarNav");

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (navbarCollapse && navbarCollapse.classList.contains("show")) {
        const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
        if (bsCollapse) {
          bsCollapse.hide();
        }
      }
    });
  });

  // --- 2. Control del Modal para ver el CV ---
  const btnVerCv = document.getElementById("btnVerCv");
  const cvViewer = document.getElementById("cvViewer");
  const btnDescargarCv = document.getElementById("btnDescargarCv");
  const modalCvElement = document.getElementById("modalCv");

  // Ruta del PDF (debe estar en la misma carpeta raíz que index.html)
  const cvPath = "./CV_Alberto.pdf";

  if (btnDescargarCv) {
    btnDescargarCv.href = cvPath;
  }

  if (btnVerCv && modalCvElement) {
    // Se inicializa la instancia de Bootstrap Modal
    const modalCv = new bootstrap.Modal(modalCvElement);

    btnVerCv.addEventListener("click", (e) => {
      e.preventDefault();

      // Carga la ruta del PDF dentro del iframe solo al hacer clic
      if (cvViewer) {
        cvViewer.src = cvPath;
      }

      // Despliega el modal
      modalCv.show();
    });
  }
});