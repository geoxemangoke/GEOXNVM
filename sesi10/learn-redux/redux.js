import { createStore } from "redux"

const intitalState = {
    number: 0
}

const counter = (state = intitalState, action) => {
    switch(action.type) {
        case 'INCREMENT':
            return {
                ...state,
                number: state.number + 1
            }
        case 'DECREMENT':
            return {
                number: state.number - 1
            }
        default:
            return state;
    }
}

const store = createStore(counter) 
store.subscribe(() => {
    console.log(store.getState(),  '============= subscribe ==========')
})

store.dispatch({type: 'INCREMENT'})