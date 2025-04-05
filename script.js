// Function to handle header visibility based on scroll direction
function handleScroll() {
    const header = document.querySelector('header');
    const currentScrollPosition = window.scrollY;
    const lastScrollPosition = window.lastScrollPosition || 0;
  
    // If scrolling down, hide the header
    if (currentScrollPosition > lastScrollPosition && currentScrollPosition > 100) {
      header.style.transform = 'translateY(-100%)';
    } 
    // If scrolling up, show the header
    else if (currentScrollPosition < lastScrollPosition) {
      header.style.transform = 'translateY(0)';
    }
  
    // Store the current scroll position for the next check
    window.lastScrollPosition = currentScrollPosition;
  }
  
  // Initialize header visibility
  document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('header');
    header.style.transition = 'transform 0.3s ease-in-out';
    header.style.position = 'fixed';
    header.style.top = '0';
    header.style.left = '0';
    header.style.width = '100%';
    header.style.zIndex = '1001';
    
    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
  });
  
  // Sidebar toggle
  const menuToggle = document.getElementById('menu-toggle');
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('overlay');
  
  menuToggle.addEventListener('click', () => {
    sidebar.style.left = '0';
    overlay.style.display = 'block';
  });
  
  overlay.addEventListener('click', () => {
    sidebar.style.left = '-250px';
    overlay.style.display = 'none';
  });
  
  document.querySelectorAll('#sidebar a').forEach(link => {
    link.addEventListener('click', () => {
      sidebar.style.left = '-250px';
      overlay.style.display = 'none';
    });
  });
  
  // Hero Slider
  let currentSlide = 0;
  const slides = document.querySelectorAll('.slide');
  
  function showSlide(index) {
    slides.forEach(slide => slide.classList.remove('active'));
    slides[index].classList.add('active');
  }
  
  function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  }
  
  showSlide(currentSlide);
  setInterval(nextSlide, 5000);