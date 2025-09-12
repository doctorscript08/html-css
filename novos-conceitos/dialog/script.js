const open_popup = document.querySelector('.open-popup')
const close_popup = document.querySelector('.close-popup')
const popup = document.querySelector('.popup')

open_popup.addEventListener('click', () => {
    popup.showModal()
})

close_popup.addEventListener('click', () => {
    popup.close()
})