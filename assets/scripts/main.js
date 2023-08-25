const burger = document.querySelector('.burger')
const closeBruger = document.querySelector('.navbar-close')
const navbar = document.querySelector('.navbar')
const dropdownSelected = document.querySelector('.dropdown-selected')
const dropdownList = document.querySelector('.dropdown-list')

const closeNavbar = () => {
    navbar.removeAttribute('style')
}

const closeDropdown = () => {
    dropdownList.classList.remove('open')
}

burger.addEventListener('click', () => {
    navbar.setAttribute('style', 'transform: translateX(0)')
})

closeBruger.addEventListener('click', () => {
    closeNavbar()
})

dropdownSelected.addEventListener('click', () => {
    dropdownList.classList.add('open')
})

document.addEventListener('click', (event) => {
    if (!navbar.contains(event.target) && !burger.contains(event.target)) {
        closeNavbar()
    }

    if (!dropdownList.contains(event.target) && !dropdownSelected.contains(event.target)) {
        closeDropdown()
    }
})

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault()

        const targetId = this.getAttribute('href')
        const targetElement = document.querySelector(targetId)

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth',
            })
        }
    })
})
console.log('connect')
