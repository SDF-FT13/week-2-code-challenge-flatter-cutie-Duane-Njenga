// Your code here

document.addEventListener('DOMContentLoaded', () => {
    let characterBar = document.getElementById('character-bar');

    fetch(`http://localhost:3000/characters`)
    .then(res => res.json())
    .then(characters => {characters.forEach(character => {
        const span = document.createElement('span');
        span.textContent = character.name;

        characterBar.appendChild(span)

     })
    });

})