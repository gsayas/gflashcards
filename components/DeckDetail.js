import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import {commonStyles} from "../utils/commonStyles";
import {objToArray, questionsToString} from "../utils/helpers";
import { connect } from 'react-redux'

class DeckDetail extends Component {    
    render() {
        const {decks} = this.props;        
        const deckTitle = this.props.navigation.state.params.deckTitle;        
        const deck = decks ? objToArray(decks).find(item => item.title === deckTitle) : false;

        return (
            <View>
                <Text>{deck.title}</Text>
                <Text>{questionsToString(deck.questions)}</Text>              
                <TouchableOpacity
                    style={commonStyles.SubmitBtn}
                    onPress={
                        () => this.props.navigation.navigate(
                            'AddCard',
                            { deckTitle: deckTitle }
                    )} 
                >
	                <Text style={commonStyles.submitBtnText}>Add Card</Text>
	            </TouchableOpacity>
                <TouchableOpacity
                    style={commonStyles.SubmitBtn}
                    onPress={
                        () => this.props.navigation.navigate(
                            'Quiz',
                            { deck: deck }
                    )} 
                >
                    <Text style={commonStyles.submitBtnText}>Start Quiz</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

function mapStateToProps (decks) {
    return {
        decks
    }
}
export default connect(
    mapStateToProps,
)(DeckDetail)