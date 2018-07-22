import React from 'react';
import {StyleSheet,
        Text,
        TextInput,
        KeyboardAvoidingView } from 'react-native';
import {TouchableOpacity} from 'react-native';
import { insertDeck, getDecks, clean } from '../utils/api'
import {purple, white} from "../utils/colors";
import {commonStyles} from "../utils/commonStyles";
import {addDeck} from "../actions/decksActions";
import { connect } from 'react-redux'
import {SubmitButton} from "../components/SubmitButton";
import { NavigationActions } from 'react-navigation'

class AddDeck extends React.Component {
    state = {
        title: '',
    }
    handleTitleChange = (title) => {
        this.setState(() => ({title}));
    }
    handleSubmit = () => {
        const newDeck = {
            title: this.state.title,
            questions: []
        };

        this.props.dispatch(addDeck(newDeck));  
        insertDeck(newDeck);        
        this.toDeckDetail(this.state.title);   
    }
    toDeckDetail = (deckTitle) => {
        console.log(this.props.navigation)
        this.props.navigation.dispatch(NavigationActions.navigate(
            { routeName: 'DeckDetail', params: { deckTitle: deckTitle }}))
    }
    handleGet = () => {
        const decks = getDecks();
        decks.then(res => console.info(res));
    }

    handleClean = () => {
        clean();
    }

    render() {
        const {title} = this.state;

        return (
            <KeyboardAvoidingView behavior='padding' style={styles.container}>
                <Text>What is the title of your new deck?</Text>
                <TextInput
                    value={title}
                    onChangeText={this.handleTitleChange}
                    placeholder='Deck Title'
                    style={styles.title}
                />
                <SubmitButton onPress={this.handleSubmit} text='Create Deck' />
                <SubmitButton onPress={this.handleGet} text='get Decks' />
                <SubmitButton onPress={this.handleClean} text='clean Decks' />
            </KeyboardAvoidingView>
        );
    }
}

export default connect()(AddDeck)

const styles = StyleSheet.create({
    title: {
        width: 200,
        height: 44,
        padding: 8,
        borderWidth: 1,
        borderColor: '#757575',
        margin: 50,
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }
});
