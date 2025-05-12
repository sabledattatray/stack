document.addEventListener("DOMContentLoaded", function () {
  // Mobile menu toggle functionality
  const mobileMenuToggle = document.querySelector(".mobile-menu-toggle");
  const leftSidebar = document.querySelector(".left-sidebar");

  mobileMenuToggle.addEventListener("click", function () {
    leftSidebar.classList.toggle("active");

    // Add overlay when sidebar is active
    if (leftSidebar.classList.contains("active")) {
      createOverlay();
    } else {
      removeOverlay();
    }
  });

  // Create overlay function
  function createOverlay() {
    const overlay = document.createElement("div");
    overlay.className = "overlay";
    overlay.style.display = "block";
    overlay.addEventListener("click", function () {
      leftSidebar.classList.remove("active");
      removeOverlay();
    });
    document.body.appendChild(overlay);
  }

  // Remove overlay function
  function removeOverlay() {
    const overlay = document.querySelector(".overlay");
    if (overlay) {
      overlay.remove();
    }
  }

  // Filter buttons functionality
  const filterButtons = document.querySelectorAll(".btn-filter");
  filterButtons.forEach((button) => {
    button.addEventListener("click", function () {
      filterButtons.forEach((btn) => btn.classList.remove("active"));
      this.classList.add("active");

      // Here you would typically filter the blog posts
      // For demo purposes, we'll just log the filter
      console.log(`Filtering by: ${this.textContent}`);
    });
  });

  // Pagination buttons functionality
  const paginationButtons = document.querySelectorAll(".btn-pagination");
  paginationButtons.forEach((button) => {
    button.addEventListener("click", function () {
      if (!this.classList.contains("active")) {
        document
          .querySelector(".btn-pagination.active")
          .classList.remove("active");
        this.classList.add("active");
        // Here you would typically load the corresponding page
        console.log(`Loading page: ${this.textContent}`);
      }
    });
  });

  // Make sidebars sticky
  function handleSidebarSticky() {
    const headerHeight = document.querySelector(".header").offsetHeight;
    const sidebars = document.querySelectorAll(".left-sidebar, .right-sidebar");

    sidebars.forEach((sidebar) => {
      if (sidebar) {
        sidebar.style.top = `${headerHeight + 20}px`;
        sidebar.style.height = `calc(100vh - ${headerHeight + 40}px)`;
      }
    });
  }

  // Initialize
  handleSidebarSticky();

  // Update on resize
  window.addEventListener("resize", handleSidebarSticky);

  // Close sidebar when clicking on a link (optional: implement if needed)
});
