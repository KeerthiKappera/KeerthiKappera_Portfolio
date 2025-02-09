document.addEventListener("DOMContentLoaded", function () {
    // Select all nav links
    const navLinks = document.querySelectorAll("nav a");
    const sections = document.querySelectorAll("section");

    // Function to show the clicked section and hide others
    function showSection(event) {
        event.preventDefault();  // Prevent default anchor behavior
        const targetId = event.target.getAttribute("href").substring(1); // Get section ID
        sections.forEach(section => {
            section.style.display = section.id === targetId ? "block" : "none";
        });

        // Scroll smoothly to the section
        document.getElementById(targetId).scrollIntoView({ behavior: "smooth" });
    }

    // Attach event listeners to nav links
    navLinks.forEach(link => {
        link.addEventListener("click", showSection);
    });

    // Initially, show only the home section
    sections.forEach(section => {
        section.style.display = section.id === "home" ? "block" : "none";
    });
});
