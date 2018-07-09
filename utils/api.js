import { AsyncStorage } from 'react-native';

const STORAGE_KEY = 'gflashcards:decks';

export function getDecks () {
    return AsyncStorage.getItem(STORAGE_KEY)
        .then((results) => {console.log(JSON.parse(results))})
}

export function addDeck ({ deckTitle }) {
    /*AsyncStorage.setItem(STORAGE_KEY, JSON.stringify({
        decks: deckTitle
    }));*/

    _storeData = async () => {
        try {
            await AsyncStorage.setItem(STORAGE_KEY, 'I like to save it. ');
        } catch (error) {
            // Error saving data
        }
    }
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