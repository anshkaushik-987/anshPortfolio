// Function to show a welcome popup message
window.onload = function() {
  alert("Welcome to my portfolio! I'm Ansh Kaushik, a passionate Java Developer. Feel free to explore my work and connect with me!");
};
document.addEventListener("DOMContentLoaded", function () {
  // Smooth scrolling for navigation links
  const navLinks = document.querySelectorAll('.sidebar nav ul li a');
  
  navLinks.forEach(link => {
      link.addEventListener('click', function (e) {
          e.preventDefault(); // Prevent default link behavior
          const targetId = this.getAttribute('href').substring(1);
          const targetSection = document.getElementById(targetId);
          
          // Smooth scroll to the target section
          if (targetSection) {
              window.scrollTo({
                  top: targetSection.offsetTop - 20, // Adjust for slight offset
                  behavior: 'smooth'
              });
          }
      });
  });

  // Highlight active section on scroll
  const sections = document.querySelectorAll('section');
  
  window.addEventListener('scroll', function () {
      let currentSection = '';

      sections.forEach(section => {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.clientHeight;
          
          if (window.pageYOffset >= (sectionTop - sectionHeight / 3)) {
              currentSection = section.getAttribute('id');
          }
      });

      // Update the active class on the navigation link
      navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href').substring(1) === currentSection) {
              link.classList.add('active');
          }
      });
  });

  // Scroll to top functionality
  const scrollToTopBtn = document.createElement('button');
  scrollToTopBtn.innerText = '↑ Top';
  scrollToTopBtn.className = 'scroll-to-top';
  document.body.appendChild(scrollToTopBtn);

  scrollToTopBtn.addEventListener('click', function () {
      window.scrollTo({
          top: 0,
          behavior: 'smooth'
      });
  });

  // Show or hide the scroll to top button
  window.addEventListener('scroll', function () {
      if (window.scrollY > 300) {
          scrollToTopBtn.style.display = 'block';
      } else {
          scrollToTopBtn.style.display = 'none';
      }
  });
});