
let pokList = document.querySelector('.pok-list');
let pokTemp = document.querySelector('#pok-item-template').content;
let pokFragment = document.createDocumentFragment();

let buttons = document.querySelector('.pagination')

for (let monster of pokemons.slice(0, 20)) {
    let pok = pokTemp.cloneNode(true);
    pok.querySelector('.card-img').src = monster.img;
    pok.querySelector('.pok__name').textContent = monster.name;
    pok.querySelector('.pok__index').textContent = monster.num;
    pokFragment.appendChild(pok);
}

pokList.appendChild(pokFragment)


buttons.addEventListener('click', (e) => {
    
    if (e.target.textContent == 1) {
        for (let monster of pokemons.slice(20, 40)) {
            let pok = pokTemp.cloneNode(true);
            pok.querySelector('.card-img').src = monster.img;
            pok.querySelector('.pok__name').textContent = monster.name;
            pok.querySelector('.pok__index').textContent += monster.num;
            pokFragment.appendChild(pok);
        }
        pokList.appendChild(pokFragment)
    }
    if (e.target.textContent == 2) {
        for (let monster of pokemons.slice(40, 60)) {
            let pok = pokTemp.cloneNode(true);
            pok.querySelector('.card-img').src = monster.img;
            pok.querySelector('.pok__name').textContent = monster.name;
            pok.querySelector('.pok__index').textContent += monster.num;
            pokFragment.appendChild(pok);
        }
        pokList.appendChild(pokFragment)
    }
    if (e.target.textContent == 3) {
        for (let monster of pokemons.slice(60, 80)) {
            let pok = pokTemp.cloneNode(true);
            pok.querySelector('.card-img').src = monster.img;
            pok.querySelector('.pok__name').textContent = monster.name;
            pok.querySelector('.pok__index').textContent += monster.num;
            pokFragment.appendChild(pok);
        }
        pokList.appendChild(pokFragment)
    }
    if (e.target.textContent == 4) {
        for (let monster of pokemons.slice(80, 100)) {
            let pok = pokTemp.cloneNode(true);
            pok.querySelector('.card-img').src = monster.img;
            pok.querySelector('.pok__name').textContent = monster.name;
            pok.querySelector('.pok__index').textContent += monster.num;
            pokFragment.appendChild(pok);
        }
        pokList.appendChild(pokFragment)
    }

})



