// script.js

// Donation Modal
function openDonationModal() {
    const modal = document.getElementById('donationModal');
    modal.style.display = 'block';
}

function closeDonationModal() {
    const modal = document.getElementById('donationModal');
    modal.style.display = 'none';
}

// Form Validation
function validateForm() {
    const name = document.forms['donationForm']['name'].value;
    const amount = document.forms['donationForm']['amount'].value;
    if (name === '' || amount === '') {
        alert('Name and amount must be filled out');
        return false;
    }
    return true;
}

// Smooth Scrolling
const smoothScroll = () => {
  const scrollLinks = document.querySelectorAll('a[href^="#"]');
  for (let link of scrollLinks) {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href');
      const targetPosition = document.querySelector(targetId).offsetTop;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    });
  }
};

// Dynamic Content
function loadDynamicContent() {
    const contentDiv = document.getElementById('dynamicContent');
    contentDiv.innerHTML = '<p>Loading content...</p>';
    setTimeout(() => {
        contentDiv.innerHTML = '<p>This is dynamic content loaded after 2 seconds.</p>';
    }, 2000);
}

// Initialize functions on window load
window.onload = () => {
    smoothScroll();
    loadDynamicContent();
};