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

const titulo = document.querySelector('.titleSpan');

function typeWrite(element) {
    const textArray = element.innerHTML.split('');
    element.innerHTML = '';
    textArray.forEach((letra, i) => {
        setTimeout(() => (element.innerHTML += letra), 150 * i);
    });
}
typeWrite(titulo);

// const buttonToTop = document.querySelector('.buttonsToTop');
// const buttonText = buttonToTop.querySelector('.buttonTsext');

// let currentLength = 0;
// const textContent = buttonText.textContent;
// let typingTimeout;
// let isTyping = false;

// function startTypingReverse() {
//     if (currentLength > 0) {
//         buttonText.style.width = `${
//             ((currentLength - 1) / textContent.length) * 100
//         }%`;
//         currentLength--;
//         typingTimeout = setTimeout(startTypingReverse, 75);
//     } else {
//         buttonText.style.width = '0%';
//         buttonText.style.animation = 'none';

//         buttonToTop.classList.add('rotate');
//     }
// }

// function handleTyping() {
//     if (currentLength < textContent.length) {
//         buttonText.style.width = `${
//             (currentLength / textContent.length) * 100
//         }%`;
//         currentLength++;
//         typingTimeout = setTimeout(handleTyping, 75);
//     } else {
//         buttonText.style.width = '100%';
//     }
// }

// buttonToTop.addEventListener('mouseover', () => {
//     clearTimeout(typingTimeout);
//     isTyping = false;
//     startTypingReverse();
// });

// buttonToTop.addEventListener('mouseout', () => {
//     clearTimeout(typingTimeout);
//     if (currentLength < textContent.length) {
//         isTyping = true;
//         handleTyping();
//     } else {
//         buttonText.style.width = '100%';
//     }
// });

// handleTyping();

document.addEventListener('scroll', function () {
    const sections = document.querySelectorAll('section');
    const menuLinks = document.querySelectorAll('.menuNav a');

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

const toTopBtn = document.getElementById('toTopBtn');

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
