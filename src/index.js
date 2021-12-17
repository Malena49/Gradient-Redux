// == Imports
import { randomHexColor, generateSpanColor} from './utils';

import store from './store';
import {
  changeLastColor, changeFirstColor,CHANGE_DIRECTION,
   CHANGE_FIRST_COLOR,
} from './actions';

// on peut voir que le store est un objet
// qui expose 3 fonctions :
console.log(store);

// 1 - getState qui permet d'obtenir la valeur courante du state
console.log(store.getState());

// 2 - dispatch - qui permet d'emettre une intention en direction du store

// 3 - subscribe - qui permet d'abonner des fonction aux modifications du state
//   i.e. : ces fonction seront appellée suite à une modification du state

// const state = store.getState();

// == Rendu dans le DOM
function renderNbColors() {
  const { nbColors } = store.getState();

  document.getElementById('nbColors').innerHTML = `
    ${nbColors} couleur(s) générée(s)
  `;
}
function renderGradient() {
  const { direction, firstColor, lastColor } = store.getState();

  document.getElementById('gradient').style.background = `
    linear-gradient(${direction},${firstColor},${lastColor})
  `;
}
function renderColors() {
  const { firstColor, lastColor } = store.getState();

  const firstSpan = generateSpanColor(firstColor);
  const lastSpan = generateSpanColor(lastColor);

  const result = `${firstSpan} - ${lastSpan}`;

  document.getElementById('colors').innerHTML = result;
}

// == Initialisation
renderNbColors();
renderGradient();
renderColors();

store.subscribe(renderNbColors);
store.subscribe(renderGradient);
store.subscribe(renderColors);

// == Controls
document.getElementById('randAll')
  .addEventListener('click', () => {
    store.dispatch(changeFirstColor(randomHexColor()));
    store.dispatch(changeLastColor(randomHexColor()));
  });

document.getElementById('randFirst')
  .addEventListener('click', () => {
    store.dispatch({
      type: CHANGE_FIRST_COLOR,
      // payload
      color: randomHexColor(),
    });
  });

document.getElementById('randLast')
  .addEventListener('click', () => {
    const newColor = randomHexColor();
    store.dispatch(changeLastColor(newColor));
  });

document.getElementById('direction')
  .addEventListener('click', () => {
    store.dispatch({ type: CHANGE_DIRECTION});
  });