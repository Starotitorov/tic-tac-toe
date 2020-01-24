import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'
import { FIGURE_SIZE } from './constants'

const Circle = ({ color }) =>
    (
        <Icon name="circle-o" color={color} size={FIGURE_SIZE} />
    );

export default Circle;
