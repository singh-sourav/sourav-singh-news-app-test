import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { news } from "./reducers/news";
import  newsActionWatcher  from './sagas/newsSaga'

const sagaMiddleware = createSagaMiddleware();

export const createMyStore =()=> { 
 let store= createStore(
  news,
  applyMiddleware(sagaMiddleware)
)
sagaMiddleware.run(newsActionWatcher);
return store;
}