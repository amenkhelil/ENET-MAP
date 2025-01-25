const mobileMenuButton = document.getElementById("mobileMenu");
        const navLinks = document.querySelector(".nav-links");


        mobileMenuButton.addEventListener("click", () => {
            navLinks.classList.toggle("active");
            mobileMenuButton.classList.toggle("menu-open");
        });
  