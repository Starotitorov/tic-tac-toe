import React, { Component } from 'react'
import {
    StyleSheet,
    View
} from 'react-native'

const Cross = ({ color }) =>
    (
        <View style={styles.container}>
            <View style={[styles.line, {
                transform: [
                    {rotate: '45deg'},
                ],
                backgroundColor: color
            }]} />
            <View style={[styles.line, {
                transform: [
                    {rotate: '135deg'},
                ],
                backgroundColor: color
            }]} />
        </View>
    );

const styles = StyleSheet.create({
    container: {
        position: 'relative',
        flex: 1,
        width: 80,
        height: 80
    },
    line: {
        position: 'absolute',
        left: 35,
        width: 8,
        height: 105
    }
});

export default Cross;
