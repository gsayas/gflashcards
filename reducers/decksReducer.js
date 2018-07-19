import * as Actions from "../actions/types.js";

/*const initialDecks = {
    decks: {
        React: {
            key: 'React',
            title: 'React',
            questions: [
                {
                    question: 'What is React?',
                    answer: 'A library for managing user interfaces'
                },
                {
                    question: 'Where do you make Ajax requests in React?',
                    answer: 'The componentDidMount lifecycle event'
                }
            ]
        },
        JavaScript: {
            key: 'JavasScript',
            title: 'JavaScript',
            questions: [
                {
                    question: 'What is a closure?',
                    answer: 'The combination of a function and the lexical environment within which that function was declared.'
                }
            ]
        }
    }
};*/
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
            console.log(action)
            return {
                ...state,
                [action.deckTitle]: {
                    ...state[action.deckTitle],
                    questions: updateCardsOnDeck(state[action.deckTitle].questions, action.card)
                }
            }    
        default :
            return state;
    }
}

function updateCardsOnDeck(currentCards, newCard) {

    let updatedCards = [...currentCards, newCard]

    return updatedCards;
}

export default decks;