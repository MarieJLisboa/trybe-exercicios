const Redux = require('redux');

/* Uma store só funciona se passarmos uma função que possui a
finalidade de alterá-la: o reducer. O reducer recebe como primeiro
parâmetro o state, e o seu retorno substituirá o state da store. */

/* const reducer = (state) => { return state };
const store = Redux.createStore(reducer); */

/* Inicialmente o state vem como undefined, por isso, será atribuído a ele
um valor padrão */

/* const reducer = (state = { login: false, email: "" }) => { return state };
const store = Redux.createStore(reducer); */

/* const ESTADO_INICIAL = {
  login: false,
  email: "",
};

const reducer = (state = ESTADO_INICIAL) => { return state };
const store = Redux.createStore(reducer);
console.log(store.getState());   */ //{ login: false, email: "" }

/* Para alterarmos os dados que estão no estado, a peça em função seria a action
que é um objeto JavaScript que tem ao  menos uma propriedade type (sendo responsável
  pela comunicação ao reducer de uma mudança realizada na store). O actionCreator é uma
  função que retorna uma action ao reducer, tendo como intenção alterar para verdadeiro
  a chave login da store. Para exemplo, a função actionCreator será chamada de fazerLogin
  e irá enviar uma action ao reducer, alterando a chave login da store. */

  const fazerLogin = (email) => ({
    type: 'Login', email
  });

  const ESTADO_INICIAL = {
    login: false,
    email: '',
  };

  const reducer = (state = ESTADO_INICIAL, action) => {
    switch (action.type) {
      case "LOGIN":
        return {
          ...state,
          login: !state.login,
          email: action.email,
        };
      default:
        return state;
    }
  };

  /* const store = Redux.createStore(reducer);
  store.dispatch(fazerLogin('alguem@email.com'));
  console.log(store.getState()); */
  // { login: true, email: 'alguem@email.com' }

  /* O dispatch despacha a action p/ dentro do reducer, possibilitando
que o estado seja alterado. O reducer retorna todo o estado e não somente
o que será modificado. Assim, é retornado um objeto que contém todos os dados
atuais do state { ...state }.

EXERCÍCIOS DE FIXAÇÃO
https://www.freecodecamp.org/learn/front-end-development-libraries/redux/define-an-action-creator
*/

// COMBINANDO REDUCERS

import { combineReducers } from 'redux';
import meuReducer from './meuReducer';
import meuOutroReducer from './meuOutroReducer';

const reducerCombinado = combineReducers({
  meuReducer,
  meuOutroReducer
});

export default reducerCombinado;

import { createStore } from 'redux';
import reducerCombinado from './reducers/index';
const store = createStore(reducerCombinado);
store.subscribe(() => {
  console.log(store.getState());
});


/* O subscribe adiciona um listener que executará uma callback toda vez
que uma action for disparada

//{
// meuReducer: {/_estado do meuReducer_/},
// meuOutroReducer: {/_estado do meuOutroReducer_/,}
//}

// DOCUMENTAÇÃO
// https://redux.js.org/api/combinereducers/
*/
