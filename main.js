window.addEventListener("scroll", onScroll);

onScroll();
function onScroll() {
   showNacOnScroll();
   showbackToTop();
   activateMenuAtCurrentSection(home);
   activateMenuAtCurrentSection(services);
   activateMenuAtCurrentSection(about);
   activateMenuAtCurrentSection(contact);
}

function activateMenuAtCurrentSection(section) {
   const targetLine = scrollY + innerHeight / 2;

   const sectionTop = section.offsetTop;
   const sectionHeight = section.offsetHeight;

   const sectionTopReachOrPassedTargetline = targetLine >= sectionTop;
   const sectionEndsAt = sectionTop + sectionHeight;

   const sectionEndPassedTargetline = sectionEndsAt <= targetLine;

   const sectionBoundaries = sectionTopReachOrPassedTargetline && !sectionEndPassedTargetline;

   const sectioId = section.getAttribute("id");
   const menuElement = document.querySelector(`.menu a[href*=${sectioId}]`);

   menuElement.classList.remove("active");
   if (sectionBoundaries) {
      menuElement.classList.add("active");
   }
}

function showNacOnScroll() {
   if (scrollY > 0) {
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
#about img,
#about header,
#about .content
#contact,
#contact img,
#contact header,
#contact .content,
footer .logo,
footer p,
footer .social-links

`);
