// import { createStore } from 'react-redux';
import { createStore } from "redux"
// khai báo các action
const TANG = 'TANG'
const GIAM = 'GIAM'

export const tang=()=>({type: TANG})
export const giam=()=>({type: GIAM})

//2. dinh nghia reducer
// khoi tao bien dem
const initState = {
    dem: 0
}
const demReducer=(state = initState, action) => {
    switch(action.type) // kiem tra hanh dong nao duoc goi
    { 
        case TANG:
            return {...state, dem: state.dem+1};
        case GIAM:
            return {...state, dem: state.dem-1};
        default:
            return state; // mac dinh khong co thay doi
    }
}

const store = createStore(demReducer);
export default store;
