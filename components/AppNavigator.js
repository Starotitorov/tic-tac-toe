import {
    StackNavigator
} from 'react-navigation';
import WelcomeScreen from './WelcomeScreen';
import GameScreen from './GameScreen';

export default StackNavigator(
    {
        Welcome: {
            screen: WelcomeScreen
        },
        Game: {
            screen: GameScreen
        }
    },
    {
        navigationOptions: {
            title: 'Tic Tac Toe'
        }
    }
);
