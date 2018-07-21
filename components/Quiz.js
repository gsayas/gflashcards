import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { red, green, white } from '../utils/colors.js';
import {SubmitButton} from "../components/SubmitButton";
import {commonStyles} from "../utils/commonStyles";

export default class Quiz extends React.Component {

    state = {
        currentQuestion: 0,
        correctAnswers: 0,
        showAnswer: false
    }

    handleSubmitAnswer = (answer) => {

        if(answer){
            console.log('Correct!!!')
            this.setState({
                currentQuestion: this.state.currentQuestion+1,
                correctAnswers: this.state.correctAnswers+1,                
            })
        }else{
            console.log('Incorrect!!')
            this.setState({
                currentQuestion: this.state.currentQuestion+1,               
            })
        }
    }

    toggleShowAnswer = () => {
        this.setState({showAnswer: !this.state.showAnswer})
    }

    render() {
        const deck = this.props.navigation.state.params.deck;
        const {currentQuestion, showAnswer} = this.state;
        const totalQuestions = deck.questions.length;
        let currentQuestionText = '';
        let currentAnswerText = '';

        if(currentQuestion<totalQuestions){
            currentQuestionText = deck.questions[currentQuestion].question;    
            currentAnswerText = deck.questions[currentQuestion].answer;
        }

        return (            
            <View> 
            {currentQuestion<totalQuestions?
                <View> 
                    <Text>{currentQuestion + 1}/{totalQuestions}</Text>               
                    <Text>{deck.title}</Text>
                    <Text>{!showAnswer?currentQuestionText:currentAnswerText}</Text>                    
                    <SubmitButton onPress={this.toggleShowAnswer} text={showAnswer?'Question':'Answer'} />
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
            :            
                <View>
                    <Text>{deck.title}</Text>                
                    <Text>Total of correct answers: {this.state.correctAnswers}</Text>
                </View>}
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