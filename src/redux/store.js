import {createStore,applyMiddleware,compose} from 'redux';
import reducer from './reducer';
import thunkMiddleware from 'redux-thunk';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const configureStore=(initialState)=>{
    return createStore(
        reducer,
        initialState,
        composeEnhancers(applyMiddleware(thunkMiddleware))
    )
};

export default configureStore;