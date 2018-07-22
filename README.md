gFlashcards - Android App built with React Native and bootstrapped with [Create React Native App](https://github.com/react-community/create-react-native-app).

## Installation

To install the app just run:

1. `yarn install`
2. `yarn start`
3. Follow the instructions shown in your command line

## Version Notes

1. The app was build and tested specifically for Android
2. The Local Notifications are configured to run everyday at 8am the next day the app is run for the first time. The notification for a day is cancelled if the user starts a Quiz on that day.
3. There is no test data in the app by default. The user needs to add Decks and Cards before attempting a quiz.
4. If there are no cards on a Deck the Quiz will be disabled for that Deck.