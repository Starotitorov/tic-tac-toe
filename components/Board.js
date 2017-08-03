import React from 'react';
import {
    StyleSheet,
    View
} from 'react-native';
import Tile from './Tile';

const Board = ({ board, onClickTile }) =>
    (
        <View style={styles.container}>
            {Array.from({ length: 3 }, (v, k) => k).map(i => {
                return Array.from({ lenght: 3 }, (v, k) => k).map(j => (
                    <View key={i} style={styles.row}>
                        <Tile key={j} value={board[i * 3 + j]} index={i * 3 + j} onClick={onClickTile}/>
                    </View>
                ))
            })}
        </View>
    );

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        flexDirection: 'column'
    },
    row: {
        flexDirection: 'row'
    }
});

export default Board;
