// script.js

document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.getElementById('nav-links');
    const backToTopButton = document.getElementById('back-to-top');

    // Toggle navigation menu
    menuToggle.addEventListener('click', function() {
        navLinks.classList.toggle('show');
    });

    // Show or hide the back to top button based on scroll position
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) { // Adjust the scroll position as needed
            backToTopButton.classList.add('show');
        } else {
            backToTopButton.classList.remove('show');
        }
    });

    // Scroll to top on button click
    backToTopButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});
