import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function WelcomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Welcome to the game!</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Game')}>
        <Text style={styles.instructions}>Touch here to start</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcome: {
    fontSize: 24,
    marginBottom: 54,
    textAlign: 'center',
  },
  instructions: {
    textAlign: 'center',
    color: 'grey',
  },
});
