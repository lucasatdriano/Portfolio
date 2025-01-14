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

function handleThemeChange(inputCheck) {
    if (inputCheck.checked) {
        body.classList.toggle('light');
        localStorage.setItem('lightMode', 'enabled');
    } else {
        body.classList.toggle('light');
        localStorage.setItem('lightMode', 'disabled');
    }
}

inputsCheck.forEach((inputCheck) => {
    inputCheck.addEventListener('keydown', function (event) {
        if (event.key === 'Enter') {
            this.checked = !this.checked;
            handleThemeChange(this);
        }
    });

    inputCheck.addEventListener('change', () => {
        handleThemeChange(inputCheck);
        inputCheck.blur();
    });
});

// function para abrir e fechar o menu do NavMobile
const links = document.querySelectorAll('.linkMobile');
const out = document.querySelector('main');
const btnMob = document.querySelector('#btnMenuMob');
const nav = document.querySelector('#nav');

function toggleMenu(event) {
    nav.classList.toggle('visible');
    const active = nav.classList.contains('visible');
    event.currentTarget.setAttribute('aria-expanded', active);
    if (active) {
        event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
    } else {
        event.currentTarget.setAttribute('aria-label', 'Abrir Menu');
    }
    langContainerMobile.classList.remove('visible');
    langContainerDesk.classList.remove('visible');
}
btnMob.addEventListener('click', toggleMenu);

links.forEach((link) => {
    link.addEventListener('click', toggleMenu);
});

// function para abrir e fechar o container das linguagens
const btnLangDesk = document.querySelector('#btnLangDesk');
const langContainerDesk = document.querySelector('#navLanguage');

function toggleLangDesk(event) {
    langContainerDesk.classList.toggle('visible');
    btnLangDesk.classList.toggle('active');
    const active = langContainerDesk.classList.contains('visible');
    event.currentTarget.setAttribute('aria-expanded', active);
    if (active) {
        event.currentTarget.setAttribute(
            'aria-label',
            'Fechar Container Linguagem',
        );
    } else {
        event.currentTarget.setAttribute(
            'aria-label',
            'Abrir Container Linguagem',
        );
    }
}
btnLangDesk.addEventListener('click', toggleLangDesk);

const btnLangMobile = document.querySelector('#btnLangMobile');
const langContainerMobile = document.querySelector('#navLanguageMob');

function toggleLangMobile(event) {
    langContainerMobile.classList.toggle('visible');
    btnLangMobile.classList.toggle('active');
    const active = langContainerMobile.classList.contains('visible');
    event.currentTarget.setAttribute('aria-expanded', active);
    if (active) {
        event.currentTarget.setAttribute(
            'aria-label',
            'Fechar Container Linguagem',
        );
    } else {
        event.currentTarget.setAttribute(
            'aria-label',
            'Abrir Container Linguagem',
        );
    }
}
btnLangMobile.addEventListener('click', toggleLangMobile);

// function para fechar menu ao clicar na tela
function closeMenuAndLang(event) {
    nav.classList.remove('visible');
    langContainerMobile.classList.remove('visible');
    langContainerDesk.classList.remove('visible');
    btnLangMobile.classList.remove('active');
    btnLangDesk.classList.remove('active');
}

out.addEventListener('click', closeMenuAndLang);
