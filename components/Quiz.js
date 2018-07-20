import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { red, green, white } from '../utils/colors.js'

export default class Quiz extends React.Component {    

    render() {
        const deck = this.props.navigation.state.params.deck;

        return (
            <View>                
                <Text>{deck.title}</Text>
                <TouchableOpacity 
                    style={styles.SubmitBtn} 
                    onPress={() => console.log('Correct!!')} 
                >
                    <Text style={styles.SubmitBtnText} >Correct</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={styles.SubmitBtn} 
                    onPress={() => console.log('Incorrect!')} 
                >
                    <Text style={styles.SubmitBtnText} >Incorrect</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    SubmitBtn: {
        backgroundColor: red,
        padding: 10,
        paddingLeft: 30,
        paddingRight: 30,
        height: 45,
        borderRadius: 2,        
        justifyContent: 'center',
        alignItems: 'center',
    },
    submitBtnText: {
        color: white,
        fontSize: 22,
        textAlign: 'center',
    }
})