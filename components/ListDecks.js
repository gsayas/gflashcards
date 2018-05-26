import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

export default class ListDecks extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={objToArray(decks2)}
                    renderItem={({item}) => <Text>{item.title}</Text>}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

const objToArray = (obj) => {
    Object.keys(obj).map((key) => {
        obj[key]
    })
}

const decks = [{key: 'a'}, {key: 'b'}];

const decks2 = {
    React: {
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
        title: 'JavaScript',
        questions: [
            {
                question: 'What is a closure?',
                answer: 'The combination of a function and the lexical environment within which that function was declared.'
            }
        ]
    }
}