//Declare some selectors
const section = document.querySelector('section');
const playerLivesCount = document.querySelector('span')
let playerLives = 10;

//Link text
playerLivesCount.textContent = playerLives;

//Generate the data
const getData = () => [
    { imgSrc: './pokepictures/bulbasaur.png', name: 'bulbasaur' },
    { imgSrc: './pokepictures/pikachu.png', name: 'pikachu' },
    { imgSrc: './pokepictures/charmander.png', name: 'charmander' },
    { imgSrc: './pokepictures/gengar.png', name: 'gengar' },
    { imgSrc: './pokepictures/squirtle.png', name: 'squirtle' },
    { imgSrc: './pokepictures/dratini.png', name: 'dratini' },
    { imgSrc: './pokepictures/raichu.png', name: 'raichu' },
    { imgSrc: './pokepictures/chikorita.png', name: 'chikorita' },
    { imgSrc: './pokepictures/bulbasaur.png', name: 'bulbasaur' },
    { imgSrc: './pokepictures/pikachu.png', name: 'pikachu' },
    { imgSrc: './pokepictures/charmander.png', name: 'charmander' },
    { imgSrc: './pokepictures/gengar.png', name: 'gengar' },
    { imgSrc: './pokepictures/squirtle.png', name: 'squirtle' },
    { imgSrc: './pokepictures/dratini.png', name: 'dratini' },
    { imgSrc: './pokepictures/raichu.png', name: 'raichu' },
    { imgSrc: './pokepictures/chikorita.png', name: 'chikorita' },
];

//function to randomize the cards
const randomize = () => {
    const cardData = getData();
//.sort and Math.random() to randomize the array 
    cardData.sort(() => Math.random() - 0.5);
    return cardData;
    
}

//Card generator function
const cardGenerator = () => {
    const cardData = randomize();
    //Generate the HTML
    cardData.forEach((item)  => {
    const card = document.createElement('div')
    const face = document.createElement('img')
    const back = document.createElement('div')
    card.classList = 'card';
    face.classList = 'face';
        back.classList = 'back';
        //attach the info to the cards
        face.src = item.imgSrc;
       card.setAttribute('name', item.name) 
        //attach the cards to the section
        section.appendChild(card);
        card.appendChild(face);
        card.appendChild(back);
        //add event listener
        card.addEventListener('click', (e) => {
            card.classList.toggle('toggleCard');
            checkCards(e);
        })
})

   
}

const checkCards = (e) => {
    console.log(e);
    const clickedCard = e.target;
    clickedCard.classList.add('flipped');
    const flippedCards = document.querySelectorAll('.flipped')
    const toggleCard = document.querySelectorAll('.toggleCard')
    
    //logic
    if (flippedCards.length == 2) {
        if (flippedCards[0].getAttribute('name') ===
            flippedCards[1].getAttribute('name')
        ) {
            console.log('match');
            flippedCards.forEach((card) => {
                card.classList.remove('flipped');
                card.style.pointerEvents = 'none';
            })
        } else {
            console.log('wrong');
            flippedCards.forEach((card) => {
                card.classList.remove('flipped');
                setTimeout(() => card.classList.remove('toggleCard'), 1000);
            });
            playerLives--;
            playerLivesCount.textContent = playerLives;
            if (playerLives === 0) {
                restart('Try Again');
            }
            
        }  
    }
     //Run a check to see if we won the game
     if (toggleCard.length === 16) {
        restart('You Won!')
    }
   
}
//restart function
const restart = (text) => {
    let cardData = randomize();
    let faces = document.querySelectorAll('.face');
    let cards = document.querySelectorAll('.card');
    section.style.pointerEvents = 'none';
    cardData.forEach((item, index) => {
        cards[index].classList.remove('toggleCard');
        //Randomize
        setTimeout(() => {
            cards[index].style.pointerEvents = 'all';
            faces[index].src = item.imgSrc;
            cards[index].setAttribute('name', item.name);
            section.style.pointerEvents = 'all';
        }, 1000);
    });
    playerLives = 10;
    playerLivesCount.textContent = playerLives;
    setTimeout(() => window.alert(text), 100);
}

// const reset = document.querySelector('button');
// reset.addEventListener('click', function {
    
// })

cardGenerator();

const resetButton = document.getElementById('resetButton');
resetButton.addEventListener('click', () => {
    // Call the restart function to reset the game
    restart('Game Reset');
});

cardGenerator();
