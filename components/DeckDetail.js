import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import {commonStyles} from "../utils/commonStyles";

class DeckDetail extends Component {
    render() {
        return (
            <View>
                <Text>Deck Detail - {/*JSON.stringify(this.props.navigation.state.params.entryId)*/}</Text>                
                <TouchableOpacity style={commonStyles.SubmitBtn} onPress={() => this.props.navigation.navigate('AddCard')} >
	                <Text style={commonStyles.submitBtnText}>Add Card!</Text>
	            </TouchableOpacity>
            </View>
        )
    }
}

export default DeckDetail