import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text
} from 'react-native';
import {
    CIRCLE,
    CROSS
} from '../constants';
import Circle from './Circle';
import Cross from './Cross';

export default class Tile extends Component {
    _renderContent() {
        switch (value) {
            case CIRCLE:
                return <Circle color="white"/>
            case CROSS:
                return <Cross color="white"/>
            default:
                return <Text />;
        }
    }

    render() {
        return (
            <View style={styles.container}>
                {this._renderContent()}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        borderColor: '#fff',
        borderWidth: 1,
        width: 100,
        height: 100
    }
});
