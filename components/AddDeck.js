import React from 'react';
import { StyleSheet,
        Text,
        View,
        TextInput,
        KeyboardAvoidingView } from 'react-native';

export default class AddDeck extends React.Component {
    state = {
        title: ''
    }
    handleTitleChange = (title) => {
        this.setState(() => ({title}));
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

    }
});
