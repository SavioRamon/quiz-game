export default function reducer(state={}, action) {
    switch(action.type){
        case "API_DADOS":
            return action.payload;
        default:
            return state;
    }
}