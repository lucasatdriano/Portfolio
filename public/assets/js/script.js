//
const items = document.querySelectorAll('.langs');
let currentActive = document.querySelector('.langs.active');

items.forEach((item) => {
    item.addEventListener('mouseover', () => {
        if (currentActive) {
            currentActive.classList.remove('active');
        }
    });

    item.addEventListener('mouseout', () => {
        if (currentActive) {
            currentActive.classList.add('active');
        }
    });
});

//
const titulo = document.querySelector('.titleSpan');

function typeWrite(element) {
    const textArray = element.innerHTML.split('');
    element.innerHTML = '';
    textArray.forEach((letra, i) => {
        setTimeout(() => (element.innerHTML += letra), 150 * i);
    });
}
typeWrite(titulo);

//
document.addEventListener('scroll', function () {
    const sections = document.querySelectorAll('section');
    const menuLinks = document.querySelectorAll('.menuNavDesktop a');

    let currentSection = '';

    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop - sectionHeight / 3) {
            currentSection = section.getAttribute('id');
        }
    });

    menuLinks.forEach((link) => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSection}`) {
            link.classList.add('active');
        }
    });
});

const toTopBtn = document.querySelector('#toTopBtn');

window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    if (
        document.body.scrollTop > 200 ||
        document.documentElement.scrollTop > 200
    ) {
        toTopBtn.classList.add('visible');
        toTopBtn.classList.remove('hidden');
    } else {
        toTopBtn.classList.add('hidden');
        toTopBtn.classList.remove('visible');
    }
}

//
const inputCheck = document.querySelector('#inputTheme');
const body = document.body;

if (localStorage.getItem('light') === 'enabled') {
    body.classList.add('light');
    inputCheck.checked = true;
}

inputCheck.addEventListener('change', () => {
    if (inputCheck.checked) {
        body.classList.add('light');
        localStorage.setItem('lightMode', 'enabled');
    } else {
        body.classList.remove('light');
        localStorage.setItem('lightMode', 'disabled');
    }
});
