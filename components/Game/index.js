import React, { Component } from 'react';
import TicTacToe from 'tictactoe-agent';
import Board from './Board';
import {
    View
} from 'react-native';
import {
    CIRCLE,
    CROSS,
    EMPTY,
    DRAW,
    VICTORY_CONDITIONS
} from './constants';

const USER_FIGURE = CIRCLE;
const AI_FIGURE = CROSS;

export default class Game extends Component {
    constructor(props) {
        super(props);

        this.state = {
            board: [EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY]
        };
    }

    _populateTile(index, figure, onFinish=f=>f) {
        if (this.state.board[index] !== EMPTY) {
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
        const input = this.state.board.join('');
        const model = new TicTacToe.Model(input, AI_FIGURE);
        const recommendation = model.getRecommendation();

        this._populateTile(recommendation.index, AI_FIGURE);
    }

    _judgeWinner() {
        if (!this.state.board.some(figure => figure === EMPTY)) {
            return DRAW;
        }

        let winner = null;
        for (let i = 0; i < VICTORY_CONDITIONS.length; ++i) {
            let figure = this.state.board[VICTORY_CONDITIONS[i][0]];

            if (VICTORY_CONDITIONS[i].every(tile => this._checkTile(tile, figure))) {
                winner = figure;
                break;
            }
        }

        return winner;
    }

    _checkTile(tile, figure) {
        return this.state.board[tile] === figure &&
            this.state.board[tile] !== EMPTY;
    }

    _clearField() {
        this.setState({
            board: [EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY]
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
