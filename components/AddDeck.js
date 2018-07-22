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
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';

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
        this.setState({title:''}); 
    }
    toDeckDetail = (deckTitle) => {
        this.props.navigation.dispatch(NavigationActions.navigate(
            { routeName: 'DeckDetail', params: { deckTitle: deckTitle }}))
    }
    render() {
        const {title} = this.state;

        return (
            <KeyboardAvoidingView behavior='position' style={styles.container}>
                <Text style={styles.intro}>What is the title of your new deck?</Text>
                <TextInput
                    value={title}
                    onChangeText={this.handleTitleChange}
                    placeholder='Deck Title'
                    style={styles.input}
                />
                <TouchableOpacity
                    style={styles.SubmitBtn}
                    onPress={this.handleSubmit}>
                    <Text style={styles.submitBtnText}>Create Deck</Text>
                </TouchableOpacity>                
            </KeyboardAvoidingView>
        );
    }
}

export default connect()(AddDeck)

const styles = StyleSheet.create({
    input: {
        width: 200,
        height: 44,
        padding: 8,
        borderWidth: 1,
        borderColor: '#757575',
        margin: 30,
    },
    intro: {        
        fontSize:18,
        marginTop: 20
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    SubmitBtn: {
        backgroundColor: purple,
        padding: 10,
        paddingLeft: 30,
        paddingRight: 30,
        height: 45,
        borderRadius: 2,        
        justifyContent: 'center',
        alignSelf: 'center',
        width:180
    },
    submitBtnText: {
        color: white,
        fontSize: 22,
        textAlign: 'center',
    }
});
