import React from 'react';
import Color from './Color'
import {PaletteState} from './Palette'

export default function ViewRow(props: PaletteState) {
  return (
    <div>
      { props.state.values.map((c: any) => <Color color={c} size={props.state.size}/>) }
    </div>
  );
}
