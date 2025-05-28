function filterProjects(category, buttonId) {
    const projectCards = document.querySelectorAll('.projects_grid_container');
    const filterButtons = document.querySelectorAll('.projects-filter-btn');

    // Show or hide projects based on selected category
    projectCards.forEach((card) => {
      const projectCategory = card.getAttribute('data-category');

      if (category === 'All' || projectCategory === category) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });

    // Remove active class from all buttons
    filterButtons.forEach((btn) => {
      btn.classList.remove('active');
    });

    // Add active class to the clicked button
    document.getElementById(buttonId).classList.add('active');
  }

  // Default to showing all projects on page load
  filterProjects('All', 'all');