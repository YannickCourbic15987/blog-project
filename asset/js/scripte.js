const navDrop = document.querySelector('#navDrop');
const btnDrop = document.querySelector('#btn-drop');

//! event menu 
const animDrop = () => {
    btnDrop.addEventListener('click', () => {
        if (navDrop.classList.contains('init')) {
            navDrop.classList.remove('init')
            navDrop.classList.add('final')
        }
        else if (navDrop.classList.contains('final')) {
            navDrop.classList.remove('final')
            navDrop.classList.add('init')
        }
    })
}
animDrop()
