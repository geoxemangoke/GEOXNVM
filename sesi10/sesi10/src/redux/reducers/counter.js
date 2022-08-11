const initialState = {
    number:0,
    title: 'Learn Redux'
}

const counter = (state = initialState, action) => {
    switch (action.type) {
        case 'INCREMENT' :
            return {
                ...state,
                number:state.number + 1
            }
    }
}