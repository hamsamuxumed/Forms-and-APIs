
const form = document.getElementById('cardForm');
const greeting = document.getElementById('greeting');
const body = document.querySelector('body');


form.addEventListener('submit', e => {
    e.preventDefault();
    console.log(e.target.greeting.value);
    document.querySelector('h4').textContent += e.target.greeting.value;
    document.getElementById('eventOutput').textContent += e.target.event.value;
    document.getElementById('messageOutput').textContent += e.target.message.value;
    form.style.display = "none";
})

