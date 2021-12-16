// on importe depusi redux la fonction qui nous permet de créer un store
import { createStore } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';

// on importe notre reducer (l'employé du store)
import reducer from '../reducers';

// on crée le store
const store = createStore(reducer, devToolsEnhancer());

// on l'exporte afin de le rendre utilisable par
// la couche initerface utilisateur de notre application
// ce store ser notre interlocuteur unique en ce qui concerne la récupération
// de l'état actuel de l'application et pour la demande de modification de cet état.
export default store;
