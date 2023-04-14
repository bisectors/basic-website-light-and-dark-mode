const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById('nav');
const toggleIcon = document.getElementById('toggle-icon');
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');
const image4 = document.getElementById('image4');
const textBox = document.getElementById('text-box');

// Dark or Light Images
function imageMode (color){
    image1.src = `img/undraw_business_chat_re_gg4h_${color}.svg`;
    image2.src = `img/undraw_exams_re_4ios_${color}.svg`;
    image3.src = `img/undraw_launching_re_tomg_${color}.svg`;
    image4.src = `img/undraw_bitcoin_re_urgq_${color}.svg`;
}

//Dark mode Styles
function darkMode() {
    nav.style.backgroundColor = 'rgb(0 0 0/80%)';
    textBox.style.backgroundColor = 'rgb(255 255 255/60%)';
    toggleIcon.children[0].textContent = 'Dark Mode';
    toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon');
    imageMode('dark');
    
}

//Light mode Styles
function lightMode() {
    nav.style.backgroundColor = 'rgb(255 255 255/60%)';
    textBox.style.backgroundColor = 'rgb(0 0 0/80%)' ;
    toggleIcon.children[0].textContent = 'Light Mode';
    toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun');
    imageMode('light');
}

// Switch Theme
function switchTheme(event){
    if (event.target.checked){
        document.documentElement.setAttribute('data-theme', 'dark');
        darkMode();
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        lightMode();
    }
}
//Event listener
toggleSwitch.addEventListener('change', switchTheme);



