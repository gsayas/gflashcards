import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import DeckListItem from "./DeckListItem";
import { connect } from 'react-redux'
import { getDecks } from '../utils/api'
import {loadDecks} from "../actions/decksActions";

class ListDecks extends React.Component {

    componentDidMount () {
        const { dispatch } = this.props
        console.log('mounting')

        const decks = getDecks();
        //decks.then(res => console.log(res));
        decks.then(res => dispatch(loadDecks(res)))

       /* getDecks()
            .then((persistedDecks) => dispatch(loadDecks(persistedDecks)));
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
        const {decks} = this.props;
        console.log(this.props);

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


function mapStateToProps (decksReducer) {
    return {
        decks: decksReducer.decks
    }
}
export default connect(
    mapStateToProps,
)(ListDecks)