import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text
} from 'react-native';
import Game from './Game';

export default class App extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Game />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

