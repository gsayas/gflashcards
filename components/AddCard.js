import React, { Component } from 'react'
import { View, Text } from 'react-native'

class AddCard extends Component {
    render() {
        return (
            <View>
                <Text>AddCard - {/* JSON.stringify(this.props.navigation.state.params.entryId)*/}</Text>
            </View>
        )
    }
}

export default AddCard