import React from 'react';
import { View, StatusBar } from 'react-native';
import { createMaterialTopTabNavigator, createStackNavigator } from 'react-navigation'
import { purple, white, green } from './utils/colors'
import AddDeck from "./components/AddDeck";
import AddCard from "./components/AddCard";
import Quiz from "./components/Quiz";
import ListDecks from "./components/ListDecks";
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import decksReducer from './reducers/decksReducer';
import DeckDetail from "./components/DeckDetail";
import { Constants } from 'expo';
import { FontAwesome, Ionicons } from '@expo/vector-icons';

function CustomStatusBar ({backgroundColor, ...props}) {
  return (
    <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  )
}

const Tabs = createMaterialTopTabNavigator({
    ListDecks: {
        screen: ListDecks,
        navigationOptions: {
            tabBarLabel: 'DECKS',
            tabBarIcon: ({ tintColor }) => <FontAwesome name='th-list' size={25} color={tintColor} />
        },
    },
    AddDeck: {
        screen: AddDeck,
        navigationOptions: {
            tabBarLabel: 'NEW DECK',
            tabBarIcon: ({ tintColor }) => <FontAwesome name='plus-square' size={25} color={tintColor} />
        },
    },
}, {
    navigationOptions: {
        header: null
    },
    tabBarOptions: {
        activeTintColor: white,
        showIcon: true,
        labelStyle: {
            fontSize: 12,
            marginTop: 3
        },
        style: {
            height: 63,
            backgroundColor: purple,
            shadowColor: 'rgba(0, 0, 0, 0.24)',
            shadowOffset: {
                width: 0,
                height: 3
            },
            shadowRadius: 6,
            shadowOpacity: 1
        }, 
        indicatorStyle: {
            backgroundColor: 'red',
        },
    }
})

const DeckNavigator = createStackNavigator({
    Home: {
        screen: Tabs,
        navigationOptions: {
            header: null
        }
    },
    DeckDetail: {
        screen: DeckDetail,
        navigationOptions: ({ navigation }) => ({
          title: `${navigation.state.params.deckTitle}`,
            headerTintColor: white,
            headerStyle: {
                backgroundColor: purple,
            }
        }),
    },
    AddCard: {
        screen: AddCard,
        navigationOptions: {
          title: 'Add Card',
            headerTintColor: white,
            headerStyle: {
                backgroundColor: purple,
                marginTop: 0,
                paddingTop: 0
            }
        },
    },
    Quiz: {
        screen: Quiz,
        navigationOptions: {
          title: 'Quiz',
            headerTintColor: white,
            headerStyle: {
                backgroundColor: purple,
            }
        },
    }
})

export default class App extends React.Component {
  render() {
    return (
        <Provider store={createStore(decksReducer)}>
            <View style={{flex: 1}}>
                <CustomStatusBar backgroundColor={purple} barStyle="light-content" />
                <DeckNavigator />
            </View>
        </Provider>
    );
  }
}
