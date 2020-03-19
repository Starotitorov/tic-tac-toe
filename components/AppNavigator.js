import { createStackNavigator } from 'react-navigation-stack';
import WelcomeScreen from './WelcomeScreen';
import GameScreen from './GameScreen';

export default createStackNavigator(
  {
    Welcome: {
      screen: WelcomeScreen,
    },
    Game: {
      screen: GameScreen,
    },
  },
  {
    navigationOptions: {
      title: 'Tic Tac Toe',
    },
  },
);
