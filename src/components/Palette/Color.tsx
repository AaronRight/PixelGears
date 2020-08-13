import React from 'react';

type ColorState = {
  color: string
  size: number
}

const Color = (parameters: ColorState) =>  <div style={{
        background: parameters.color,
        border: '1px solid black',
        width: parameters.size,
        height: parameters.size
      }} className="Color"></div>

export default Color;