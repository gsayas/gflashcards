import React, { Component } from 'react'
import { View, Text } from 'react-native'

class DeckDetail extends Component {
    render() {
        return (
            <View>
                <Text>Deck Detail - {/*JSON.stringify(this.props.navigation.state.params.entryId)*/}</Text>
            </View>
        )
    }
}

export default DeckDetail