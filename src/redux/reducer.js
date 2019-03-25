import {GET_NEWS} from './action'
import {combineReducers} from 'redux'

const newsList=(state=[],action)=>{
    switch(action.type){
        case GET_NEWS:
            return action.data;
            break;
        default:
            return state;
    }
}

export default combineReducers({
    newsList
})
