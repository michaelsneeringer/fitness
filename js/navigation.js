// Navigation functionality
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Highlight active navigation link based on current page
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-links a');

    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href');
        if (linkPage === currentPage) {
            link.classList.add('active');
            // Also highlight parent dropdown if applicable
            const parentDropdown = link.closest('.nav-dropdown');
            if (parentDropdown) {
                const parentLink = parentDropdown.querySelector(':scope > a');
                if (parentLink) {
                    parentLink.classList.add('active');
                }
            }
        }
    });

    // Mobile hamburger menu toggle
    const navToggle = document.querySelector('.nav-toggle');
    const navLinksContainer = document.querySelector('.nav-links');

    if (navToggle && navLinksContainer) {
        navToggle.addEventListener('click', function() {
            navToggle.classList.toggle('active');
            navLinksContainer.classList.toggle('open');
            navToggle.setAttribute('aria-expanded',
                navLinksContainer.classList.contains('open'));
        });

        // Close mobile menu when a non-dropdown link is clicked
        navLinksContainer.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', function() {
                if (!this.closest('.nav-dropdown') || this.closest('.dropdown-menu')) {
                    navToggle.classList.remove('active');
                    navLinksContainer.classList.remove('open');
                    navToggle.setAttribute('aria-expanded', 'false');
                }
            });
        });
    }

    // Dropdown functionality for touch devices
    const dropdowns = document.querySelectorAll('.nav-dropdown');

    dropdowns.forEach(dropdown => {
        const dropdownLink = dropdown.querySelector(':scope > a');

        // Handle click/touch on dropdown toggle
        dropdownLink.addEventListener('click', function(e) {
            // Check if this is a touch device or small screen
            if (window.innerWidth <= 768 || 'ontouchstart' in window) {
                e.preventDefault();

                // Close other dropdowns
                dropdowns.forEach(other => {
                    if (other !== dropdown) {
                        other.classList.remove('active');
                    }
                });

                // Toggle this dropdown
                dropdown.classList.toggle('active');
            }
        });
    });

    // Close dropdowns and mobile menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.nav-dropdown')) {
            dropdowns.forEach(dropdown => {
                dropdown.classList.remove('active');
            });
        }
        if (!e.target.closest('.main-nav')) {
            if (navToggle && navLinksContainer) {
                navToggle.classList.remove('active');
                navLinksContainer.classList.remove('open');
                navToggle.setAttribute('aria-expanded', 'false');
            }
        }
    });

    // Close dropdowns and mobile menu on escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            dropdowns.forEach(dropdown => {
                dropdown.classList.remove('active');
            });
            if (navToggle && navLinksContainer) {
                navToggle.classList.remove('active');
                navLinksContainer.classList.remove('open');
                navToggle.setAttribute('aria-expanded', 'false');
            }
        }
    });
});
