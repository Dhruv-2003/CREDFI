
        window.addEventListener('DOMContentLoaded', () =>{
            const overlay = document.querySelector('#overlay')
            const openBtn = document.querySelector('#open-btn')
            const closeBtn = document.querySelector('#close-modal')

            const toggleModal = () => {
                overlay.classList.toggle('hidden')
                overlay.classList.toggle('flex')
            }

            openBtn.addEventListener('click', toggleModal)

            closeBtn.addEventListener('click', toggleModal)
        })
