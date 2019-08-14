import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from "react-native";
import CounterApp from './src/CounterApp'
import { Provider } from 'react-redux'
import {store,persistor} from './src/store'
import { PersistGate } from 'redux-persist/integration/react';/* persistgate para inicializar el persistor / rehidratar  el state*/

class App extends Component {

    render() {
        return (
          <PersistGate loading={<Text>Loading...</Text>} persistor={persistor}>
            <Provider store={store}>
                <CounterApp />
            </Provider>
          </PersistGate>
        );
    }
}

export default App

// export default App;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});
