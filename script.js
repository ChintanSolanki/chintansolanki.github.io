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

document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    // Optional: Close menu when a link is clicked
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });
});

function updateNavLinksPosition() {
    const nav = document.getElementById('topNav');
    const navLinks = document.getElementById('navLinks');

    if (nav && navLinks) {
        const navHeight = nav.offsetHeight;

        // Set dynamic top and height
        navLinks.style.top = `${navHeight}px`;
        navLinks.style.height = `calc(100vh - ${navHeight}px)`;
    }
}

// Initial call
updateNavLinksPosition();

// Optional: Update on window resize
window.addEventListener('resize', updateNavLinksPosition);