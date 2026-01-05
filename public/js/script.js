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

window.addEventListener("DOMContentLoaded", () => {
  const stayMatch = document.querySelector("#stay-match");
  const filterPanel = document.getElementById("filterPanel");

  if (!stayMatch) return;

  if (localStorage.getItem("openFilters") === "true" && filterPanel) {
    new bootstrap.Collapse(filterPanel, { toggle: true });
    localStorage.removeItem("openFilters");
  }

  stayMatch.addEventListener("click", () => {
    const currLocation = window.location.pathname;
    const isListings = currLocation === "/listings";
    const isCategory = currLocation.startsWith("/listings/category/");

    if (!isListings && !isCategory) {
      localStorage.setItem("openFilters", "true");
      window.location.href = "/listings";
      return; // stop further execution after redirect
    }

    // Just scroll to top — Bootstrap handles collapse automatically
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});

document.querySelectorAll(".filter").forEach((filter) => {
  filter.addEventListener("click", () => {
    const category = filter.getAttribute("data-category");
    // Redirect to backend route
    window.location.href = `/listings/category/${category}`;
  });
});

// profile logic

const profileWrapper = document.querySelector(".profile-wrapper");
const profileBtn = document.querySelector(".profile-btn");

profileBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  profileWrapper.classList.toggle("active");
});

document.addEventListener("click", () => {
  profileWrapper.classList.remove("active");
});

// Filter logic

const filtersBtn = document.querySelector(".filters-btn");
const filtersWrapper = document.querySelector(".filters-wrapper");

filtersBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  filtersWrapper.classList.toggle("active");
});

document.addEventListener("click", () => {
  filtersWrapper.classList.remove("active");
});
