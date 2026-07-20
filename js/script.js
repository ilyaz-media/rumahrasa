const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");
const menuIcon = document.getElementById("menu-icon");

menuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");

    if (mobileMenu.classList.contains("hidden")) {
        menuIcon.classList.remove("ri-close-line");
        menuIcon.classList.add("ri-menu-3-line");
    } else {
        menuIcon.classList.remove("ri-menu-3-line");
        menuIcon.classList.add("ri-close-line");
    }
});

// Tutup menu saat link dipilih
document.querySelectorAll("#mobile-menu a").forEach(link => {
    link.addEventListener("click", () => {
        mobileMenu.classList.add("hidden");
        menuIcon.classList.remove("ri-close-line");
        menuIcon.classList.add("ri-menu-3-line");
    });
});