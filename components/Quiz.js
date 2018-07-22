import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { red, green, white, purple } from '../utils/colors.js';

export default class Quiz extends React.Component {

    state = {
        currentQuestion: 0,
        correctAnswers: 0,
        showAnswer: false
    }

    handleSubmitAnswer = (answer) => {

        if(answer){
            this.setState({
                currentQuestion: this.state.currentQuestion + 1,
                correctAnswers: this.state.correctAnswers + 1,                
            })
        }else{
            this.setState({
                currentQuestion: this.state.currentQuestion + 1,               
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

        if(currentQuestion < totalQuestions){
            currentQuestionText = deck.questions[currentQuestion].question;    
            currentAnswerText = deck.questions[currentQuestion].answer;
        }

        return (            
            <View style={styles.container}> 
            {currentQuestion<totalQuestions?
                <View style={styles.container}>                    
                    <Text style={styles.totalQuestionsText}>{currentQuestion + 1}/{totalQuestions}</Text>
                    <View style={styles.questionContainer}>               
                        <Text style={styles.questionText}>{!showAnswer?currentQuestionText:currentAnswerText}</Text>                    
                        <TouchableOpacity
                            onPress={this.toggleShowAnswer}>
                            <Text style={styles.FlipBtnText}>{showAnswer ? 'Question':'Answer' }</Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity 
                            style={[styles.AnswerBtn, styles.CorrectAnswerBtn]} 
                            onPress={() => this.handleSubmitAnswer(true)} 
                        >
                            <Text style={styles.AnswerBtnText} >Correct</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                            style={[styles.AnswerBtn, styles.IncorrectAnswerBtn]} 
                            onPress={() => this.handleSubmitAnswer(false)} 
                        >
                            <Text style={styles.AnswerBtnText} >Incorrect</Text>
                        </TouchableOpacity>
                    </View>
                </View>            
            :            
                <View style={styles.resultsContainer}>
                    <Text style={styles.resultsDeckTitleText}>You finished the quiz '{deck.title}'</Text>                
                    <Text style={styles.resultsPercentageText}>Correct answers: {this.state.correctAnswers} of {totalQuestions}</Text>
                </View>}
            </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',        
        justifyContent: 'space-between'
    },
    totalQuestionsText: {
        fontSize: 18,
        marginTop: 10,
        alignSelf: 'flex-start',   
    },
    questionContainer: {
        alignItems: 'center',
    },
    questionText: {  
        fontSize: 30,
        marginBottom: 20
    },
    AnswerBtn: {
        backgroundColor: red,
        padding: 40,
        paddingLeft: 30,
        paddingRight: 30,
        height: 45,
        borderRadius: 2,        
        justifyContent: 'center',
        alignItems: 'center',
        width: 300,
        marginBottom: 20
    },
    /*FlipBtn: {       
        justifyContent: 'center',
        alignItems: 'center',
    },*/
    CorrectAnswerBtn: {
        backgroundColor: green,
    },
    IncorrectAnswerBtn: {
        backgroundColor: red,
    },
    AnswerBtnText: {
        color: white,
        fontSize: 22,
        textAlign: 'center',
    },
    FlipBtnText: {
        color: red,
        fontSize: 16,
        textAlign: 'center',
    },    
    resultsContainer: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',        
        justifyContent: 'center'
    },
    resultsDeckTitleText: {
        fontSize: 22,
        marginBottom: 20
    },
    resultsPercentageText: {
        fontSize: 28,
    },
})