import React from 'react';
import { Svg, Circle as C } from 'react-native-svg';
import { FIGURE_SIZE, STROKE_WIDTH, FIGURE_PADDING } from './constants';

const Circle = ({ color }) => (
  <Svg height={FIGURE_SIZE} width={FIGURE_SIZE}>
    <C
      cx={FIGURE_SIZE / 2}
      cy={FIGURE_SIZE / 2}
      r={(FIGURE_SIZE - 2 * FIGURE_PADDING) / 2}
      stroke={color}
      strokeWidth={STROKE_WIDTH}
      fill="transparent"
    />
  </Svg>
);

export default Circle;
