import { AsyncStorage } from 'react-native';

const STORAGE_KEY = 'gflashcards:decks';

export function getDecks () {
    return AsyncStorage.getItem(STORAGE_KEY)
        .then(getResults)
}

/*export function getDeck ( deckTitle ) {
    return AsyncStorage.getItem(STORAGE_KEY)
        .then(getResults)
}*/

export function insertDeck ( deck ) {
    return AsyncStorage.mergeItem(STORAGE_KEY, JSON.stringify({
        [deck.title]: deck
    }));
}

export function addCardToDeck ( deckTitle, card ) {
    return AsyncStorage.getItem(STORAGE_KEY)
    .then((results) => {
      const data = JSON.parse(results)
      data[deckTitle].questions = [...data[deckTitle].questions, card]
      AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(data))
    })
}

export function getResults(results){
    console.log(results)
    return JSON.parse(results);
}

export function clean () {
    return AsyncStorage.removeItem(STORAGE_KEY)
        .then()
}