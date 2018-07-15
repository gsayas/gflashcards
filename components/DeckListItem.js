import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { white } from '../utils/colors.js'

export default class DeckListItem extends React.Component {

    questionsToString = (questions) => {
        return questions.length + (questions.length !== 1 ? ' Cards':' Card');
    }

    render() {
        return (
            <TouchableOpacity style={styles.item} onPress={() => console.log('Pressed!')} >
                <Text>{this.props.deck.title}</Text>
                <Text>{this.questionsToString(this.props.deck.questions)}</Text>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: white,
        borderRadius: 2,
        borderBottomWidth: 1,
        padding: 20,
        marginLeft: 10,
        marginRight: 10,
        marginTop: 17,
        justifyContent: 'center',
        shadowRadius: 3,
        shadowOpacity: 0.8,
        shadowColor: 'rgba(0, 0, 0, 0.24)',
        shadowOffset: {
            width: 0,
            height: 3
        },
    }
})