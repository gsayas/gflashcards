import React from 'react';
import { View } from 'react-native';
import { createMaterialTopTabNavigator } from 'react-navigation'
import { purple, white } from './utils/colors'
import AddDeck from "./components/AddDeck";
import ListDecks from "./components/ListDecks";
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers';

const Tabs = createMaterialTopTabNavigator({
    ListDecks: {
        screen: ListDecks,
        navigationOptions: {
            tabBarLabel: 'DECKS',
            tabBarIcon: ({ tintColor }) => <Ionicons name='ios-bookmarks' size={30} color={tintColor} />
        },
    },
    AddDeck: {
        screen: AddDeck,
        navigationOptions: {
            tabBarLabel: 'NEW DECK',
            tabBarIcon: ({ tintColor }) => <FontAwesome name='plus-square' size={30} color={tintColor} />
        },
    },
}, {
    navigationOptions: {
        header: null
    },
    tabBarOptions: {
        activeTintColor: white,
        style: {
            height: 56,
            backgroundColor: purple,
            shadowColor: 'rgba(0, 0, 0, 0.24)',
            shadowOffset: {
                width: 0,
                height: 3
            },
            shadowRadius: 6,
            shadowOpacity: 1
        }
    }
})

export default class App extends React.Component {
  render() {
    return (
        <Provider store={createStore(reducer)}>
            <View style={{flex: 1}}>
                <Tabs />
            </View>
        </Provider>
    );
  }
}
