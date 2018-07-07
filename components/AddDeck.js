import React from 'react';
import {StyleSheet,
        Text,
        TextInput,
        KeyboardAvoidingView } from 'react-native';
import {TouchableOpacity} from 'react-native';
//import SubmitButton from 'SubmitButton'
import { addDeck } from '../utils/api'
import {purple, white} from "../utils/colors";

function SubmitButton ({ onPress }) {
    return (
        <TouchableOpacity
            style={styles.SubmitBtn}
            onPress={onPress}>
            <Text style={styles.submitBtnText}>SUBMIT</Text>
        </TouchableOpacity>
    )
}

export default class AddDeck extends React.Component {
    state = {
        title: ''
    }
    handleTitleChange = (title) => {
        this.setState(() => ({title}));
    }
    handleSubmit = () => {
        const {title} = this.state;

        //dispatch addDeck
        console.log(title);
        addDeck(title);

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
                <SubmitButton onPress={this.handleSubmit} />
            </KeyboardAvoidingView>
        );
    }
}

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
