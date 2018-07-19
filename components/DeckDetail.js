import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import {commonStyles} from "../utils/commonStyles";

class DeckDetail extends Component {
    render() {
        return (
            <View>
                <Text>Deck Detail - {this.props.navigation.state.params.deckTitle}</Text>                
                <TouchableOpacity 
                    style={commonStyles.SubmitBtn} 
                    onPress={
                        () => this.props.navigation.navigate(
                            'AddCard',                        
                            { deckTitle: this.props.navigation.state.params.deckTitle }
                    )} 
                >
	                <Text style={commonStyles.submitBtnText}>Add Card!</Text>
	            </TouchableOpacity>
            </View>
        )
    }
}

export default DeckDetail