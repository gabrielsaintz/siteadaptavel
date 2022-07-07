window.addEventListener("scroll", onScroll);

function onScroll() {
   showNacOnScroll();
   showbackToTop();
}

function showNacOnScroll() {
   if (scrollY > 30) {
      nav.classList.add("scroll");
   } else {
      nav.classList.remove("scroll");
   }
}

function showbackToTop() {
   if (scrollY > 1400) {
      backToTopButton.classList.add("show");
   } else {
      backToTopButton.classList.remove("show");
   }
}

function openMenu() {
   document.body.classList.add("menu-expanded");
}

function closeMenu() {
   document.body.classList.remove("menu-expanded");
}

ScrollReveal({
   origin: "top",
   distance: "30px",
   duration: 700,
}).reveal(`
#home, 
#home img, 
#home .stats, 
#services,
#services header,
#services .card,
#about,
#about header,
#about .content
#contact,
#contact header,
#contact .content,
footer .logo,
footer p,
footer .social-links

`);
