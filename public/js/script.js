// Bootstrap form validation script

(() => {
  "use strict";

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll(".needs-validation");

  // Loop over them and prevent submission
  Array.from(forms).forEach((form) => {
    form.addEventListener(
      "submit",
      (event) => {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add("was-validated");
      },
      false
    );
  });
})();

// Stay Match button logic - auto-open, redirect and scroll-up.

const stayMatch = document.querySelector("#stay-match");

window.addEventListener("DOMContentLoaded", () => {
  const shouldOpenFilters = localStorage.getItem("openFilters");

  if (shouldOpenFilters === "true") {
    const filterPanel = document.getElementById("filterPanel");
    if (filterPanel) {
      const bsCollapse = new bootstrap.Collapse(filterPanel, { toggle: true });
      localStorage.removeItem("openFilters");
    }
  }
});

stayMatch.addEventListener("click", () => {
  const currLocation = window.location.pathname;

  const isListings = currLocation === "/listings";
  const isCategory = currLocation.startsWith("/listings/category/");

  if (!isListings && !isCategory) {
    localStorage.setItem("openFilters", "true");
    window.location.href = "/listings";
  } else {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
});

document.querySelectorAll(".filter").forEach((filter) => {
  filter.addEventListener("click", () => {
    const category = filter.getAttribute("data-category");
    // Redirect to backend route
    window.location.href = `/listings/category/${category}`;
  });
});
