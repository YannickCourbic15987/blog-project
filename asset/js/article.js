const navDrop = document.querySelector('#navDrop');
const btnDrop = document.querySelector('#btn-drop');
const formInput = document.querySelector('#formInput');
const centerForm = document.querySelector("#centerForm");
//! event menu 
const animDrop = () => {
    btnDrop.addEventListener('click', () => {
        if (navDrop.classList.contains('init')) {
            navDrop.classList.remove('init')
            navDrop.classList.add('final')
            formInput.classList.remove('visible')
            formInput.classList.add('hide')

        }
        else if (navDrop.classList.contains('final')) {
            navDrop.classList.remove('final')
            navDrop.classList.add('init')
            setTimeout(tmpAdd, 800)

        }
    })
}
animDrop()

const tmpAdd = () => {
    formInput.classList.remove('hide')
    formInput.classList.add('visible')
}
tmpAdd()
centerForm.addEventListener('submit', (e) => {
    e.preventDefault
})