import React, { Component } from 'react'
import { View, 
		 Text,
		 KeyboardAvoidingView,
		 TextInput,
		 StyleSheet } from 'react-native'
import { addCardToDeck, getDecks, clean } from '../utils/api'
import { addCard } from "../actions/decksActions";
import { connect } from 'react-redux'
import { SubmitButton } from "../components/SubmitButton";
import { NavigationActions } from 'react-navigation'

class AddCard extends Component {
	state = {
		question: '',
		answer: ''
	}
	handleFormChange = (newData) => {
        this.setState(newData);
    }
    handleSubmit = () => {
        const newCard = {
            question: this.state.question,
            answer: this.state.answer
        };
        const deckTitle = this.props.navigation.state.params.deckTitle;

        this.props.dispatch(addCard(deckTitle, newCard));
        this.toHome();
        addCardToDeck(deckTitle, newCard);
    }
    toHome = () => {
        this.props.navigation.dispatch(NavigationActions.back({routeName: 'DeckDetail'}))
    }    
    render() {
        const {question, answer} = this.state;

        return (
            <KeyboardAvoidingView behavior='padding' style={styles.container}>                
                <TextInput
                    value={question}
                    onChangeText={(value)=>this.handleFormChange({question: value})}
                    placeholder='Question of the new card'
                    style={styles.input}
                />
                <TextInput
                    value={answer}
                    onChangeText={(value)=>this.handleFormChange({answer: value})}
                    placeholder='Answer of the new card'
                    style={styles.input}
                />
                <SubmitButton onPress={this.handleSubmit} text='SUBMIT' />
            </KeyboardAvoidingView>
        );
    }
}

export default connect()(AddCard);

const styles = StyleSheet.create({    
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        width: 300,
        height: 44,
        padding: 8,
        borderWidth: 1,
        borderColor: '#757575',
        margin: 20,
    }
});
