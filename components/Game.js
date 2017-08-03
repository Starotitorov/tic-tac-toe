import React, { Component } from 'react';
import Board from './Board';
import {
    View
} from 'react-native';
import {
    CIRCLE,
    CROSS
} from '../constants';

export default class Game extends Component {
    constructor(props) {
        super(props);

        this.state = {
            board: [CIRCLE, CROSS, CIRCLE, CIRCLE, CROSS, CIRCLE, CIRCLE, CROSS, CIRCLE]
        };
    }

    render() {
        const { board } = this.state;

        return (
            <View>
                <Board board={board}/>
            </View>
        );
    }
}
