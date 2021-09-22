const greeting = document.getElementById('formGreeting');
const welcome = document.getElementById('greeting')
const otherWelcome = document.querySelector('h4')

greeting.addEventListener('submit', (e) => {
    otherWelcome.textContent += welcome.e.target.name.value
    e.preventDefault();

})
