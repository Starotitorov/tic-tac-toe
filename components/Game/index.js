import React, { Component } from 'react';
import Board from './Board';
import {
    View
} from 'react-native';
import {
    CIRCLE,
    CROSS,
    VICTORY_CONDITIONS
} from './constants';

const USER_FIGURE = CIRCLE;
const AI_FIGURE = CROSS;

export default class Game extends Component {
    constructor(props) {
        super(props);

        this.state = {
            board: [null, null, null, null, null, null, null, null, null]
        };
    }

    _populateTile(index, figure, onFinish=f=>f) {
        if (this.state.board[index]) {
            return;
        }

        const board = [...this.state.board];
        board[index] = figure;

        this.setState(
            {
                board
            },
            () => {
                if (this._judgeWinner() !== null) {
                    this._clearField();
                }

                onFinish();
            }
        );
    };

    _AIAct() {
        const tilesToChooseFrom = this.state.board.reduce((tiles, value, index) => {
            if (value === null) {
                tiles.push(index);
            }

            return tiles;
        }, []);

        const randomChoice = Math.floor(Math.random() * tilesToChooseFrom.length);
        const chosenTile = tilesToChooseFrom[randomChoice];

        this._populateTile(chosenTile, AI_FIGURE);
    }

    _judgeWinner() {
        let winner = null;

        for (let i = 0; i < VICTORY_CONDITIONS.length; ++i) {
            let figure = this.state.board[VICTORY_CONDITIONS[i][0]];

            if (VICTORY_CONDITIONS[i].every(tile => this.state.board[tile] === figure)) {
                winner = figure;
                break;
            }
        }

        return winner;
    }

    _clearField() {
        this.setState({
            board: [null, null, null, null, null, null, null, null, null]
        });
    }

    _handlePress = (index) => {
        this._populateTile(index, USER_FIGURE, () => this._AIAct());
    };

    render() {
        return (
            <View>
                <Board board={this.state.board} onPress={this._handlePress}/>
            </View>
        );
    }
}
