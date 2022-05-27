// import functions and grab DOM elements
import { renderGoblin } from './render-utils.js';

const form = document.querySelector('form');
const goblinListEl = document.querySelector('.goblins');


// let state
let playerHP = 10;
let goblins = [
    { name: 'Harry', hp: 1 },
    { name: 'Mike', hp: 4 },
];

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const goblinName = data.get('goblin-name');

    const newGoblin = {
        name: goblinName,
        hp: Math.cell(Math.random() * 5),
    };

    goblins .push(newGoblin);
    displayGoblins();

});

function displayGoblins() {
    goblinListEl.textContent = '';

    for (let goblin of goblins) {
        const goblinEl = renderGoblin(goblin);

        goblinEl.addEventListener('click', () => {
            goblinClickHandler(goblin);
        });
        goblinListEl.append(goblinEl);
    }
}

displayGoblins();

