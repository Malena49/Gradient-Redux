// on définit des action type :
// un action type est une constante qui permet de stocker un type d'action
export const CHANGE_DIRECTION_TO_LEFT = 'CHANGE_DIRECTION_TO_LEFT';
export const CHANGE_DIRECTION_TO_RIGHT = 'CHANGE_DIRECTION_TO_RIGHT';

export const CHANGE_FIRST_COLOR = 'CHANGE_FIRST_COLOR';
export const changeFirstColor = (color) => ({
  type: CHANGE_FIRST_COLOR,
  color,
});

export const CHANGE_LAST_COLOR = 'CHANGE_LAST_COLOR';
// on définit des action creators :
// un action creator est une fonction qui renvoie un objet
// action d'un type donné
export const changeLastColor = (color) => ({
  type: CHANGE_LAST_COLOR,
  color,
  // équivalent à (shorthand property):
  // color: color,
});
