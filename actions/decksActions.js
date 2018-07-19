//import * as API from '../utils/api';
import { ADD_DECK, LOAD_DECKS, ADD_CARD } from '../actions/types.js';

export function addDeck (deck) {
    return {
        type: ADD_DECK,
        deck
    }
}

export function loadDecks (decks) {
    console.log(decks)
    return {
        type: LOAD_DECKS,
        decks
    }
}

export function addCard (deckTitle, card) {
    return {
        type: ADD_CARD,
        deckTitle,
        card
    }
}