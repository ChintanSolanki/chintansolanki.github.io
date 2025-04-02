document.addEventListener("DOMContentLoaded", function () {
    // Select all navigation links
    document.querySelectorAll(".nav-links a, .logo").forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault(); // Prevent default behavior
            
            const targetId = this.getAttribute("data-target");
            let targetElement;

            if (targetId === "top") {
                // Scroll to the top of the page
                targetElement = document.body;
            } else {
                // Scroll to the respective section
                targetElement = document.getElementById(targetId);
            }

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        });
    });
});