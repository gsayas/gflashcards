import * as Actions from "../actions/types.js";

const initialDecks = {};

function decks(state = initialDecks, action) {
    switch  (action.type) {
        case Actions.LOAD_DECKS:
            return {
                ...state,
                ...action.decks
            }
        case Actions.ADD_DECK:
            return {
                ...state,
                [action.deck.title]: action.deck
            }
        case Actions.ADD_CARD:
            return {
                ...state,
                [action.deckTitle]: {
                    ...state[action.deckTitle],
                    questions: [...state[action.deckTitle].questions, action.card]
                }
            }    
        default :
            return state;
    }
}

export default decks;