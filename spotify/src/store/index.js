import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import Reactotron from 'reactotron-react-js';

import sagas from './sagas';
import reducers from './ducks';

const middlewares = [];

const sagaMonitor = process.env.NODE_ENV === 'development' ? console.tron.createSagaMonitor() : null;

const sagaMiddleware = createSagaMiddleware({sagaMonitor});

middlewares.push(sagaMiddleware);

/* PADRÃO CODIGO ANTIGO */
const composer = process.env.NODE_ENV === 'development'
  ? compose(
    applyMiddleware(...middlewares),
    Reactotron.createEnhancer(),    
  )
  : applyMiddleware(...middlewares);

const store = createStore(reducers, composer);  

//Exemplo RocketSeat, não fuciona
//const createAppropriateStore =  process.env.NODE_ENV === 'development' ? Reactotron.createStore : createStore;
//const store = createAppropriateStore(reducers, compose(applyMiddleware(...middlewares)));

sagaMiddleware.run(sagas);

export default store;