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
/*
export async function addDeck ({ key, deck }) {
    try {
        await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify({
            [key]: 'hi there'
        }));
    } catch (error) {
        // Error saving data
        console.log(error);
    }
}

export async function getDecks () {
    try {
        const value = await AsyncStorage.getItem(STORAGE_KEY);
        console.log(value); // hi there
    } catch (error) {
        console.log(error);
    }
}*/


/*export function removeEntry (key) {
    return AsyncStorage.getItem(STORAGE_KEY)
        .then((results) => {
            const data = JSON.parse(results)
            data[key] = undefined
            delete data[key]
            AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(data))
        })
}*/