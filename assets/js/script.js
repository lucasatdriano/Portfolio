const items = document.querySelectorAll('.langs');
let currentActive = document.querySelector('.langs.active');

items.forEach(item => {
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

function typeWrite(elemento) {
    const textArray = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    textArray.forEach((letra, i) => {
        setTimeout(() => elemento.innerHTML += letra, 150 * i);
    })
}
typeWrite(titulo);