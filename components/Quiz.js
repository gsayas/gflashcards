import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { red, green, white } from '../utils/colors.js'

export default class Quiz extends React.Component {

    state = {
        currentQuestion: 0,
        correctAnswers: 0,
        showAnswer: false
    }

    handleSubmitAnswer = (answer) => {

        if(answer){
            console.log('Correct!!')
        }else{
            console.log('Incorrect!')
        }
    }

    render() {
        const deck = this.props.navigation.state.params.deck;

        return (
            <View>                
                <Text>{deck.title}</Text>
                <Text>{deck.questions[0].question}</Text>
                <TouchableOpacity 
                    style={styles.AnswerBtn, styles.CorrectAnswerBtn} 
                    onPress={() => this.handleSubmitAnswer(true)} 
                >
                    <Text style={styles.AnswerBtnText} >Correct</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={styles.AnswerBtn, styles.IncorrectAnswerBtn} 
                    onPress={() => this.handleSubmitAnswer(false)} 
                >
                    <Text style={styles.AnswerBtnText} >Incorrect</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    AnswerBtn: {
        backgroundColor: red,
        padding: 10,
        paddingLeft: 30,
        paddingRight: 30,
        height: 45,
        borderRadius: 2,        
        justifyContent: 'center',
        alignItems: 'center',
    },
    CorrectAnswerBtn: {
        backgroundColor: green
    },
    IncorrectAnswerBtn: {
        backgroundColor: red
    },
    AnswerBtnText: {
        color: white,
        fontSize: 22,
        textAlign: 'center',
    }
})