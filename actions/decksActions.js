//import * as API from '../utils/api';
import { ADD_DECK } from '../actions/types.js';

export function addDeck ({deck}) {
    return {
        type: ADD_DECK,
        deck
    }
}

export function loadDecks ({decks}) {
    return {
        type: LOAD_DECKS,
        deckS
    }
}