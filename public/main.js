const loginButton = document.querySelector('.login')
const logoutButton = document.querySelector('.logout')

loginButton.addEventListener('click', () => {
    fetch(`/login`)
})

logoutButton.addEventListener('click', () => {
    fetch(`/logout`)
})