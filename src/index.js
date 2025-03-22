// Your code here

document.addEventListener('DOMContentLoaded', () => {
    let characterBar = document.getElementById('character-bar');

    fetch(`http://localhost:3000/characters`)
    .then(res => res.json())
    .then(characters => {characters.forEach(character => {
        const span = document.createElement('span');
        span.textContent = character.name;

        characterBar.appendChild(span)
        span.addEventListener('click', () => {
            displayCharacterDetails(character.id)

            })
         });

    })
})

function displayCharacterDetails(id){
    fetch(`http://localhost:3000/characters/${id}`)
    .then(res => res.json())
    .then(character => {
       let name = document.getElementById('name');
       let  image = document.querySelector('#detailed-info img');
       let votes = document.getElementById('vote-count')
        
       name.textContent = `${character.name}`;
        image.src = `${character.image}`;
        image.alt = `${character.name}`;
        votes.textContent = `${character.votes}`;

    });
}






