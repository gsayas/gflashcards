import * as Actions from "../actions/types.js";

const initialDecksState = {
    decks: []
};

function decksReducer(state = initialDecksState, action) {
    switch  (action.type) {
        case Actions.LOAD_DECKS:
            console.log(action.decks)
            return {
                ...state,
                decks: action.decks
            }
        case Actions.ADD_DECKS:
            return {
                ...state,
                decks: [
                    ...state.decks,
                    action.deck
                ],
            }
        default :
            return state;
    }
}

export default decksReducer;