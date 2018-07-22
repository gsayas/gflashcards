import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { white, purple } from '../utils/colors.js'
import {questionsToString} from "../utils/helpers";

export default class DeckListItem extends React.Component {

    render() {
        return (
            <TouchableOpacity 
                style={styles.item} 
                onPress={() => this.props.navigation.navigate(
                    'DeckDetail',
                    { deckTitle: this.props.deck.title }
                )} 
            >
                <Text style={styles.Text}>{this.props.deck.title}</Text>
                <Text style={styles.Text}>{questionsToString(this.props.deck.questions)}</Text>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: purple,
        borderRadius: 6,
        padding: 15,
        marginLeft: 10,
        marginRight: 10,
        marginTop: 17,
        alignItems: 'center',
        justifyContent: 'center',
        shadowRadius: 3,
        shadowOpacity: 0.8,
        shadowColor: 'rgba(0, 0, 0, 0.24)',
        shadowOffset: {
            width: 0,
            height: 3
        },
    },
    Text: {
        color: white,
        fontSize: 18,
    }
})