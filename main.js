const mobile_nav = document.querySelector(".mobile-nav-btn");
const nav_head = document.querySelector("#head");

const toggleNavber = () => {
  nav_head.classList.toggle('active'); // Toggle the 'active' class
};

mobile_nav.addEventListener('click', toggleNavber);
