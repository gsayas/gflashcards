import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import DeckListItem from './DeckListItem';
import { connect } from 'react-redux'
import { getDecks } from '../utils/api'
import { loadDecks } from '../actions/decksActions';

class ListDecks extends React.Component {

    componentDidMount () {
        const { dispatch } = this.props

        getDecks()
            .then((persistedDecks) => dispatch(loadDecks(persistedDecks)));
            
    }

    render() {
        const {decks} = this.props;

        return (
            <View style={styles.container}>
                {Object.keys(decks).length?
                <FlatList
                    data={objToArray(decks)}
                    renderItem={({item}) => <DeckListItem deck={item} navigation={this.props.navigation} />}
                    keyExtractor={(item, index) => index.toString()} 
                />:
                <Text>Start Adding Decks!</Text>}
            </View>
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
});

const objToArray = (obj) => {
    return Object.keys(obj).map((key) => obj[key]);
}

function mapStateToProps (decks) {
    return {
        decks
    }
}
export default connect(
    mapStateToProps,
)(ListDecks)