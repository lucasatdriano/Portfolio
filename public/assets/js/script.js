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

// function para escrever nome na seção Hero
const titulo = document.querySelector('.titleSpan');

function typeWrite(element) {
    const textArray = element.innerHTML.split('');
    element.innerHTML = '';
    textArray.forEach((letra, i) => {
        setTimeout(() => (element.innerHTML += letra), 150 * i);
    });
}
typeWrite(titulo);

// function para ativar o link de ancoragem no header
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

// function para visibiladde do buttonToTop
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
        toTopBtn.classList.remove('visible');
        setTimeout(() => {
            toTopBtn.classList.add('hidden');
        }, 200);
    }
}

// function para alternar entre os temas claro e escuro
const inputsCheck = document.querySelectorAll('.themeToggle');
const body = document.body;

inputsCheck.forEach((inputCheck) => {
    if (localStorage.getItem('lightMode') == 'enabled') {
        body.classList.add('light');
        inputCheck.checked = true;
    }
});

inputsCheck.forEach((inputCheck) => {
    inputCheck.addEventListener('change', () => {
        if (inputCheck.checked) {
            body.classList.add('light');
            localStorage.setItem('lightMode', 'enabled');
        } else {
            body.classList.remove('light');
            localStorage.setItem('lightMode', 'disabled');
        }
    });
});

// function para abrir e fechar icon do menuNavMobile
