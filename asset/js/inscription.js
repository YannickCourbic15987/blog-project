const navDrop = document.querySelector('#navDrop');
const btnDrop = document.querySelector('#btn-drop');
const formCenter = document.querySelector('#formCenter');
const formIn = document.querySelector('#formIn');
const animDrop = () => {
    btnDrop.addEventListener('click', () => {
        if (navDrop.classList.contains('init')) {
            navDrop.classList.remove('init')
            navDrop.classList.add('final')
            formCenter.classList.remove('visible')
            formCenter.classList.add('toogle')

        }
        else if (navDrop.classList.contains('final')) {
            navDrop.classList.remove('final')
            navDrop.classList.add('init')
            setTimeout(tpm, 800)
        }
    })
}
animDrop()

const tpm = () => {
    formCenter.classList.remove('toogle')
    formCenter.classList.add('visible')
}
formIn.addEventListener('submit', (e) => {
    e.preventDefault
})