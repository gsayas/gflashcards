import React from 'react';
import {StyleSheet,
        Text,
        TextInput,
        KeyboardAvoidingView } from 'react-native';
import {TouchableOpacity} from 'react-native';
//import SubmitButton from 'SubmitButton'
import { insertDeck, getDecks, clean } from '../utils/api'
import {purple, white} from "../utils/colors";
import {addDeck} from "../actions/decksActions";
import { connect } from 'react-redux'

function SubmitButton ( {onPress, text} ) {
    return (
        <TouchableOpacity
            style={styles.SubmitBtn}
            onPress={onPress}>
            <Text style={styles.submitBtnText}>{text}</Text>
        </TouchableOpacity>
    )
}

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
            questions: {}
        };

        this.props.dispatch(addDeck(newDeck));

        console.log(newDeck);
        insertDeck(newDeck);

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
                <SubmitButton onPress={this.handleSubmit} text='SUBMIT' />
                <SubmitButton onPress={this.handleGet} text='get Decks' />
                <SubmitButton onPress={this.handleClean} text='clean Decks' />
            </KeyboardAvoidingView>
        );
    }
}

export default connect()(AddDeck)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        width: 200,
        height: 44,
        padding: 8,
        borderWidth: 1,
        borderColor: '#757575',
        margin: 50,

    },

    SubmitBtn: {
        backgroundColor: purple,
        padding: 10,
        paddingLeft: 30,
        paddingRight: 30,
        height: 45,
        borderRadius: 2,
        alignSelf: 'flex-end',
        justifyContent: 'center',
        alignItems: 'center',
    },
    submitBtnText: {
        color: white,
        fontSize: 22,
        textAlign: 'center',
    }
});
