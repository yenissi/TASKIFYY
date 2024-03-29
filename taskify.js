document.addEventListener("DOMContentLoaded", function() {
    // Get all navigation links
    const navLinks = document.querySelectorAll("nav ul li a");

    // Add click event listener to each link
    navLinks.forEach(function(link) {
        link.addEventListener("click", function(event) {
            // Prevent the default link behavior
            event.preventDefault();

            // Remove active class from all links
            navLinks.forEach(function(link) {
                link.classList.remove("active");
            });

            // Add active class to the clicked link
            link.classList.add("active");
        });
    });
});
