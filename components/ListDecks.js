import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import DeckListItem from "./DeckListItem";
import { connect } from 'react-redux'
import { getDecks } from '../utils/api'
import {loadDecks} from "../actions/decksActions";

class ListDecks extends React.Component {

    componentDidMount () {
        const { dispatch } = this.props

        getDecks()
            .then((persistedDecks) => dispatch(loadDecks(persistedDecks)))
            /*.then(({ entries }) => {
                if (!entries[timeToString()]) {
                    dispatch(addEntry({
                        [timeToString()]: getDailyReminderValue()
                    }))
                }
            })
            .then(() => this.setState(() => ({ready: true})))*/
    }

    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={objToArray(decks)}
                    renderItem={({item}) => <DeckListItem deck={item}/>}
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
    return Object.keys(obj).map((key) => obj[key]);
}

const decks = {
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


function mapStateToProps (decks) {
    return {
        decks
    }
}
export default connect(
    mapStateToProps,
)(ListDecks)