import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { NavigationActions, StackActions } from 'react-navigation';
import Game from './Game';
import Result from './Result';

export default class GameScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      result: null,
    };
  }

  handleGameFinish = result => {
    this.setState({ result });
  };

  handleGameRestart = () => {
    const { navigation } = this.props;

    navigation.dispatch(
      StackActions.reset({
        index: 1,
        actions: [
          NavigationActions.navigate({ routeName: 'Welcome' }),
          NavigationActions.navigate({ routeName: 'Game' }),
        ],
      }),
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <View pointerEvents={this.state.result ? 'none' : 'auto'}>
          <Game onFinish={this.handleGameFinish} />
        </View>
        {this.state.result && (
          <Result
            result={this.state.result}
            onRestartGameBtnClick={this.handleGameRestart}
          />
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
