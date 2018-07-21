import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { white } from '../utils/colors.js'
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
                <Text>{this.props.deck.title}</Text>
                <Text>{questionsToString(this.props.deck.questions)}</Text>
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