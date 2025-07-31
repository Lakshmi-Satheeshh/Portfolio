// Smooth scrolling for nav links
document.querySelectorAll('.nav-item a').forEach(link => {
  link.addEventListener('click', function(e) {
    // Ensure it's a local anchor (like #about)
    if (this.hash !== "") {
      e.preventDefault();
      const target = document.querySelector(this.hash);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  });
});

// Optional: Highlight active section (can be extended for full SPA)
window.addEventListener('scroll', () => {
  const navLinks = document.querySelectorAll('.nav-item a');
  let scrollPosition = window.scrollY;

  navLinks.forEach(link => {
    const section = document.querySelector(link.getAttribute('href'));
    if (section && section.offsetTop <= scrollPosition + 200) {
      navLinks.forEach(nav => nav.classList.remove('active'));
      link.classList.add('active');
    }
  });
});

// Hire Me button alert (or later connect it to a form or section)
const hireButton = document.querySelector('.hire-button');
if (hireButton) {
  hireButton.addEventListener('click', () => {
    alert("Thank you for your interest! I'll get back to you soon.");
  });
}

// Confirm resume download
const resumeButton = document.querySelector('.resume-button');
if (resumeButton) {
  resumeButton.addEventListener('click', (e) => {
    const confirmDownload = confirm("Do you want to download Lakshmi Satheesh's resume?");
    if (!confirmDownload) {
      e.preventDefault();
    }
  });
}
