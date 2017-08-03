import React, { Component } from 'react'
import {
    StyleSheet,
    View
} from 'react-native'

const Circle = ({ color }) =>
    (
        <View style={[styles.container, { borderColor: color }]}>
        </View>
    );

const styles = StyleSheet.create({
    container: {
        width: 80,
        height: 80,
        borderWidth: 8,
        borderRadius: 40,
    }
});

export default Circle;
