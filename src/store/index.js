import {createStore} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage'

const initialState = {
  cart: {},
  designs: []
}

const persistConfig = {
  key: 'root',
  storage,
}

const reducer = (state = initialState, action) => {
  if (action.type === 'SET_PRODUCTS') {
    return Object.assign({}, state, {
      products: state.products.concat(action.payload)
    })
  }
  if(action.type === 'LOAD_PRODUCTS'){
    return {...state, products: state.products.concat(action.payload)}
  }
  console.log(state);
  return state
}

const persistedReducer = persistReducer(persistConfig, reducer);

let store = createStore(
  persistedReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
let persistor = persistStore(store)

export {store, persistor};
