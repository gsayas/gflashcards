import React, { Component } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import {objToArray, questionsToString} from "../utils/helpers";
import { connect } from 'react-redux'
import {purple, white, black, gray} from "../utils/colors";

class DeckDetail extends Component {    
    render() {
        const {decks} = this.props;        
        const deckTitle = this.props.navigation.state.params.deckTitle;        
        const deck = decks ? objToArray(decks).find(item => item.title === deckTitle) : false;
        const emptyQuiz = deck.questions.lenght == 0;

        return (
            <View style={styles.container} >
                <View style={styles.intro} >
                    <Text style={styles.introText}>{deck.title}</Text>
                    <Text style={styles.introText}>{questionsToString(deck.questions)}</Text>
                </View>
                <TouchableOpacity
                    style={[styles.CommonBtn, styles.AddCardBtn]}
                    onPress={
                        () => this.props.navigation.navigate(
                            'AddCard',
                            { deckTitle: deckTitle }
                    )} 
                >
	                <Text style={styles.BtnText}>Add Card</Text>
	            </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.CommonBtn, ( !emptyQuiz ? styles.StartQuizBtn : styles.StartQuizBtnDisabled) ]}
                    disabled={emptyQuiz}
                    onPress={
                        () => this.props.navigation.navigate(
                            'Quiz',
                            { deck: deck }
                    )} 
                >
                    <Text style={styles.BtnText}>Start Quiz</Text>
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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center'
    },
    intro: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 60,
        marginBottom: 60
    },
    introText: {        
        fontSize: 30
    },
    CommonBtn: {
        width: 200,        
        padding: 10,
        paddingLeft: 30,
        paddingRight: 30,
        height: 45,        
        marginTop: 20,
        borderRadius: 2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    AddCardBtn: {  
        backgroundColor: purple
    }, 
    StartQuizBtn: {
        backgroundColor: black
    },
    StartQuizBtnDisabled: {
        backgroundColor: gray
    },   
    BtnText: {
        color: white,
        fontSize: 22,
        textAlign: 'center',
    }
});