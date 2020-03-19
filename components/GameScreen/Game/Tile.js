import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { CIRCLE, CROSS } from './constants';
import Circle from './Circle';
import Cross from './Cross';

export default class Tile extends Component {
  _renderContent() {
    switch (this.props.value) {
      case CIRCLE:
        return <Circle color="white" />;
      case CROSS:
        return <Cross color="white" />;
      default:
        return <Text style={styles.text} onPress={this._handlePress} />;
    }
  }

  _handlePress = () => {
    this.props.onPress(this.props.index);
  };

  render() {
    return <View style={styles.container}>{this._renderContent()}</View>;
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#fff',
    borderWidth: 1,
    width: 100,
    height: 100,
  },
  text: {
    width: 100,
    height: 100,
  },
});
