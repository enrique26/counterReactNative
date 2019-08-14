import { createStore, applyMiddleware } from 'redux'
import rootReducer from '../reducers'
// import loggerMiddleware from '../middleware/logger'
//no es necesario crear un logger con redu ya exite uno
import loggerMiddleware from 'redux-logger';
import AsyncStorage from '@react-native-community/async-storage';
import storage from 'redux-persist/lib/storage'
import { persistStore, persistReducer } from 'redux-persist'


// const store = createStore(rootReducer,applyMiddleware(loggerMiddleware2))
//
// export default store;


///configuracion inicial para el persistStore
const persistConfig = {
  key: 'root',
  storage:AsyncStorage
};

const persistedReducer = persistReducer(persistConfig, rootReducer)

const InitialState={}


let store = createStore(persistedReducer,InitialState,applyMiddleware(loggerMiddleware))
const persistor = persistStore(store
  // , () => {
  // // if you want to get restoredState
  // console.log("restoredState", store.getState());
// }
);

export { store, persistor }
