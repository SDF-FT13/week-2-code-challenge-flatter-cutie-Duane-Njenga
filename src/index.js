// Your code here
let characterBar = document.getElementById('character-bar');
document.addEventListener('DOMContentLoaded', () => {


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


let characterVotes = document.getElementById('vote-count')

function displayCharacterDetails(id){
    fetch(`http://localhost:3000/characters/${id}`)
    .then(res => res.json())
    .then(character => {

        let name = document.getElementById('name');
        let  image = document.querySelector('#detailed-info img');

       name.textContent = `${character.name}`;
        image.src = `${character.image}`;
        image.alt = `${character.name}`;
        characterVotes.textContent = `${character.votes}`;

    });
}




//Addition of votes
let form = document.getElementById('votes-form');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    let newVotes = parseInt(document.getElementById('votes').value);
    let voteCount = parseInt(document.getElementById('vote-count').textContent);

    if(!isNaN(newVotes) && !isNaN(voteCount)){
        let updatedVotes = voteCount + newVotes
        characterVotes.innerText = `${updatedVotes}`
    } else{
        alert('Input valid Number');
        
    }
        
    form.reset();

});


//Reset functionality 
let resetBtn = document.getElementById('reset-btn');

resetBtn.addEventListener('click', () => {
    let characterVotes = document.getElementById('vote-count')
    characterVotes.innerText = '0'
});

//Adding characters

let characterForm = document.getElementById('character-form');

characterForm.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(characterForm);

    let newCharacterName = document.querySelector('#character-form #name').value
    console.log(newCharacterName);
    
    const span = document.createElement('span');
    span.textContent = newCharacterName;
    
    
    characterBar.appendChild(span)
    characterForm.reset();


    let name = document.getElementById('name')
    let  image = document.querySelector('#detailed-info img');
    let imageInput = document.getElementById('image-url').value
    function immediateDisplay(){  
        name.textContent = `${newCharacterName}`;
        image.src = `${imageInput}`;
        image.alt = `${newCharacterName}`;
        characterVotes.textContent = ` 0`;
    
    }

    immediateDisplay()


    span.addEventListener('click', () => {
        let name = document.getElementById('name');
        let  image = document.querySelector('#detailed-info img');
        let imageInput = document.getElementById('image-url').value


        name.textContent = `${newCharacterName}`;
        image.src = `${imageInput}`;
        image.alt = `${newCharacterName}`;
        characterVotes.textContent = ` 0`;


    })
})



