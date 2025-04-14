// Select the menu icon and navbar
const menuIcon = document.getElementById('menu-icon');
const navbar = document.querySelector('.navbar');

// Add click event listener to the menu icon
menuIcon.addEventListener('click', () => {
    // Toggle the 'active' class on the navbar
    navbar.classList.toggle('active');
});
