document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section');

    // Function to hide all sections
    function hideAllSections() {
        sections.forEach(section => {
            section.classList.remove('fade-in');
            section.style.display = 'none';
        });
    }

    // Initially show only the hero section
    hideAllSections();
    document.getElementById('home').style.display = 'block';

    // Add click event listeners to navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            hideAllSections();
            const targetSection = document.getElementById(targetId);
            targetSection.style.display = 'block';
            targetSection.classList.add('fade-in');
        });
    });
});
