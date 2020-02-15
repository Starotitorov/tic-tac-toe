import React from 'react'
import { StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
import { FIGURE_SIZE } from './constants'

const Cross = ({ color }) =>
    (
        <Icon
            name="times"
            color={color}
            size={FIGURE_SIZE}
            style={styles.icon}
        />
    );

const styles = StyleSheet.create({
    icon: {
        paddingBottom: 6
    }
});

export default Cross;
