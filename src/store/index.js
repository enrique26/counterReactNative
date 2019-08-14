import { createStore, applyMiddleware } from 'redux'
import rootReducer from '../reducers'
import loggerMiddleware from '../middleware/logger'
//no es necesario crear un logger con redu ya exite uno
import loggerMiddleware2 from 'redux-logger';

const store = createStore(rootReducer,applyMiddleware(loggerMiddleware2))

export default store;
