const loginButton = document.querySelector('.login')
const logoutButton = document.querySelector('.logout')

loginButton.addEventListener('click', () => {
    console.log()
    fetch(`/login`)
})

logoutButton.addEventListener('click', () => {
    fetch(`/logout`)
})