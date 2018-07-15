import { AsyncStorage } from 'react-native';

const STORAGE_KEY = 'gflashcards:decks';

export function getDecks () {
    return AsyncStorage.getItem(STORAGE_KEY)
        .then(getResults)
}

export function insertDeck ( deck ) {
    return AsyncStorage.mergeItem(STORAGE_KEY, JSON.stringify({
        [deck.title]: deck
    }));
}

export function getResults(results){
    console.log(results)
    return JSON.parse(results);
}

export function clean () {
    return AsyncStorage.removeItem(STORAGE_KEY)
        .then()
}