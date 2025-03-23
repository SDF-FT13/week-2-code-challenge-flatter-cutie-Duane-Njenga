// Your code here

document.addEventListener('DOMContentLoaded', () => {
    let characterBar = document.getElementById('character-bar');
    let characterId = null;

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


let form = document.getElementById('votes-form');




form.addEventListener('submit', (e) => {
    e.preventDefault();
    let characterVotes = document.getElementById('vote-count')
    let newVotes = parseInt(document.getElementById('votes').value);
    let voteCount = parseInt(document.getElementById('vote-count').textContent);

    if(!isNaN(newVotes) && !isNaN(voteCount)){
        let votes = voteCount + newVotes
        characterVotes.innerText = `${votes}`
    } else{
        alert('Input valid Number');
        
    }
        
    form.reset();

})





