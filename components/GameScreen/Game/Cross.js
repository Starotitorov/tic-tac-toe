import React from 'react';
import { Svg, Line } from 'react-native-svg';
import { FIGURE_SIZE, STROKE_WIDTH, FIGURE_PADDING } from './constants';

const Cross = ({ color }) => (
  <Svg height={FIGURE_SIZE} width={FIGURE_SIZE}>
    <Line
      x1={FIGURE_PADDING}
      y1={FIGURE_SIZE - FIGURE_PADDING}
      x2={FIGURE_SIZE - FIGURE_PADDING}
      y2={FIGURE_PADDING}
      stroke={color}
      strokeWidth={STROKE_WIDTH}
    />
    <Line
      x1={FIGURE_PADDING}
      y1={FIGURE_PADDING}
      x2={FIGURE_SIZE - FIGURE_PADDING}
      y2={FIGURE_SIZE - FIGURE_PADDING}
      stroke={color}
      strokeWidth={STROKE_WIDTH}
    />
  </Svg>
);

export default Cross;
