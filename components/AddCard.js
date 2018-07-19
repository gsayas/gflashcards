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
import { commonStyles } from "../utils/commonStyles";

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

        console.log(newCard);
        console.log(deckTitle);
        addCardToDeck(deckTitle, newCard);

    }
    handleGet = () => {

        console.log('handleGet');
        const decks = getDecks();
        decks.then(res => console.log(res));

    }

    handleClean = () => {
        clean();
    }
    render() {
        const {question, answer} = this.state;

        return (
            <KeyboardAvoidingView behavior='padding' style={commonStyles.container}>                
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
                <SubmitButton onPress={this.handleGet} text='get Decks' />
                <SubmitButton onPress={this.handleClean} text='clean Decks' />
            </KeyboardAvoidingView>
        );
    }
}

export default connect()(AddCard);

const styles = StyleSheet.create({
    input: {
        width: 300,
        height: 44,
        padding: 8,
        borderWidth: 1,
        borderColor: '#757575',
        margin: 20,
    }
});
