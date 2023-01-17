const images = [

    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

const container = document.getElementById('container');

for (let i = 0; i < images.length ; i++) {
     
    container.innerHTML += `<div id="slider">
                              <img class="slide" src="${images[i].image}">
                              <span class="text">
                                <h5>${images[i].title}</h5>
                                <p class="paragraph">${images[i].text}</p>
                              </span>
                            </div>
                            <div id="thumbox">
                              <img class="thumb " src="${images[0].image}">
                              <img class="thumb" src="${images[1].image}">
                              <img class="thumb" src="${images[2].image}">
                              <img class="thumb" src="${images[3].image}">
                              <img class="thumb" src="${images[4].image}">
                            </div>
                            `
    
};

const up = document.querySelector('.up');
const down = document.querySelector('.down');

let current = 0;

function slideNext() {
    current++;



 

 
    if(current > images.length - 1) {
        current = 0;
    }

    const slider = document.getElementById("slider");
    slider.innerHTML = `<img class="slide" src="${images[current].image}">
                              <span class="text">
                                <h5>${images[current].title}</h5>
                                <p class="paragraph">${images[current].text}</p>
                              </span>`;
                        
}

up.addEventListener("click", slideNext);



function slidePrev() {
    current--;

  

    if(current < 0) {
        current = images.length - 1;
    }
    const slider = document.getElementById("slider");
    slider.innerHTML = `<img class="slide" src="${images[current].image}">
    <span class="text">
      <h5>${images[current].title}</h5>
      <p class="paragraph">${images[current].text}</p>
    </span>`;


}

down.addEventListener('click', slidePrev);