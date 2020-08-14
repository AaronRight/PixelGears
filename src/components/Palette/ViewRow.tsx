import React from 'react';
import Color from './Color'
import {PaletteState} from './Palette'

export default function ViewRow(props: PaletteState) {
  function onClick(value: string){
    props.setState(() => { return { choosed: value }});
  }

  function onLongPress(){
    props.setState((state: any) => { return { settings: !state.settings } });
  }

  return (
    <div>
      { props.state.values.map((c: any) => <Color choosed={c === props.state.choosed} onClick={onClick} onLongPress={onLongPress} color={c} size={props.state.size}/>) }
    </div>
  );
}
