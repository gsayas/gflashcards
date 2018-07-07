import { AsyncStorage } from 'react-native';

const STORAGE_KEY = 'gflashcards:decks'

/*export function getDecks () {
    return AsyncStorage.getItem(STORAGE_KEY)
        .then()
}*/

export function addDeck ({ deckTitle }) {
    AsyncStorage.setItem(STORAGE_KEY, JSON.stringify({
        decks: deckTitle
    }))
}

/*export function removeEntry (key) {
    return AsyncStorage.getItem(STORAGE_KEY)
        .then((results) => {
            const data = JSON.parse(results)
            data[key] = undefined
            delete data[key]
            AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(data))
        })
}*/