const links = document.querySelectorAll(".nav-links a");
const indicator = document.querySelector(".indicator");
const sections = document.querySelectorAll("section");
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

// Pindah indicator ke link aktif
function setActiveNav(id) {
  links.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${id}`) {
      link.classList.add("active");

      // Update garis bawah (hanya desktop)
      if (window.innerWidth > 768) {
        const rect = link.getBoundingClientRect();
        const containerRect = link.parentElement.getBoundingClientRect();
        indicator.style.width = rect.width + "px";
        indicator.style.left = (rect.left - containerRect.left) + "px";
      }
    }
  });
}

// Scroll Spy: deteksi section aktif
window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 120;
    if (pageYOffset >= sectionTop) {
      current = section.getAttribute("id");
    }
  });
  if (current) setActiveNav(current);
});

// Klik link -> tutup menu di mobile
links.forEach(link => {
  link.addEventListener("click", () => {
    if (window.innerWidth <= 768) {
      navLinks.classList.remove("show");
    }
  });
});

// Hamburger toggle
hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

// Posisi awal indicator saat halaman load
window.addEventListener("load", () => {
  setActiveNav("home");
});

links.forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const targetId = link.getAttribute("href").substring(1);
    const targetEl = document.getElementById(targetId);

    if (targetEl) {
      const yOffset = -70; // tinggi navbar
      const y = targetEl.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }

    if (window.innerWidth <= 768) {
      navLinks.classList.remove("show");
    }
  });
});
