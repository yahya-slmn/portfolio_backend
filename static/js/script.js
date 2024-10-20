let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ' ]').classList.add('active')
            })
        }
    })
}

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}


const themeLinks = document.querySelectorAll('.dropdown-content a');
const body = document.documentElement;
const profileImg = document.getElementById('profile-img'); // Select the image element

const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'light') {
    body.classList.add('light-theme');
    profileImg.src = 'yhy1.png'; // Set the light-theme image
} else {
    body.classList.remove('light-theme');
    profileImg.src = 'yhy.png'; // Set the dark-theme image
}

themeLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault(); // Prevent the default link behavior
        const selectedTheme = e.target.getAttribute('data-theme');

        // Toggle theme and change the image
        if (selectedTheme === 'light') {
            body.classList.add('light-theme');
            profileImg.src = 'yhy1.png'; // Change to the light theme image
            localStorage.setItem('theme', 'light');
        } else {
            body.classList.remove('light-theme');
            profileImg.src = 'yhy.png'; // Change back to the dark theme image
            localStorage.setItem('theme', 'dark');
        }
    });
});

const imgPreload = new Image();
imgPreload.src = 'yhy1.png';
