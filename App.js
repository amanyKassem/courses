import React from 'react';
import {AsyncStorage, View , Platform , I18nManager , Text} from 'react-native';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import AppNavigator from './src/routes';
import { Root } from "native-base";

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistedStore } from './src/store';
import './ReactotronConfig';
// import * as Permissions from "expo-permissions";
// import { Notifications } from 'expo'




export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isReady: false,
    };

  }

  componentWillMount() {
    I18nManager.forceRTL(true);
  }

  async componentDidMount() {

    // console.disableYellowBox = true;

    // if (Platform.OS === 'android') {
    //   Notifications.createChannelAndroidAsync('orders', {
    //     name: 'Chat messages',
    //     sound: true,
    //   });
    // }

    // Notifications.addListener(this.handleNotification);


    await Font.loadAsync({
      sukar             : require('./assets/fonts/Sukar-Regular.ttf'),
      sukarBold         : require('./assets/fonts/Sukar-Bold.ttf'),
      Roboto            : require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium     : require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
    });

    this.setState({ isReady: true });

  }

  render() {

    if (!this.state.isReady) {
      return (
          <View />
      );
    }

    return (
        <Provider store={store}>
          <PersistGate persistor={persistedStore}>
            <Root>
              <AppNavigator />
            </Root>
          </PersistGate>
        </Provider>

    );
  }
}
