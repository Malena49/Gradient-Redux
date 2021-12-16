import {
  CHANGE_DIRECTION_TO_LEFT, CHANGE_DIRECTION_TO_RIGHT, CHANGE_FIRST_COLOR, CHANGE_LAST_COLOR,
} from '../actions';

/* eslint-disable arrow-body-style */
const initialState = {
  firstColor: '#e367a4',
  lastColor: '#48b1f3',
  direction: '90deg',
  nbColors: 0,
};

// un reducer est une fonction qui va traduire les intentions
// de l'utilisateur en une modification du state
// Pour cela, il peut se baser sur :
// - l'état courant (la valeur actuelle du state)
// - l'action à entreprendre
// à partir de ces 2 entrées, il produira la nouvelle version de l'état (le nouveau state)
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_DIRECTION_TO_LEFT:
      return {
        ...state,
        // c'est le dernier qui a parlé qui a raison !
        // direction prend donc la valeur 270deg
        direction: '270deg',
      };
      // const newState = {...state};
      // newState.direction = '270deg';
      // return newState;
    case CHANGE_DIRECTION_TO_RIGHT:
      return {
        ...state,
        // c'est le dernier qui a parlé qui a raison !
        // direction prend donc la valeur 270deg
        direction: '90deg',
      };
    case CHANGE_FIRST_COLOR:
      return {
        ...state,
        firstColor: action.color,
        nbColors: state.nbColors + 1,
      };
    case CHANGE_LAST_COLOR:
      return {
        ...state,
        lastColor: action.color,
        nbColors: state.nbColors + 1,
      };
    default:
      return state;
  }
};

export default reducer;
