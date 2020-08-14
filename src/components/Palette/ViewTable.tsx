import React from 'react';
import Color from './Color'
import {PaletteState} from './Palette'
import { POSITION } from '../Controls'

export default function ViewTable(props: PaletteState) {
  function onClick(value: string){
    props.setState(() => { return { choosed: value }});
  }

  function onLongPress(){
    props.setState((state: any) => { return { settings: !state.settings } });
  }


  let values = [["","",""],["","",""],["","",""]]

  switch(props.state.position){
    case POSITION.TOP_RIGHT: {
      values[0][0] = props.state.values[0]  // + + +
      values[0][1] = props.state.values[1]  //     +
      values[0][2] = props.state.values[2]  //     +
      values[1][2] = props.state.values[3]  
      values[2][2] = props.state.values[4]  
      break;
    }
    case POSITION.BOTTOM_RIGHT: { 
      values[0][2] = props.state.values[0]  //     +
      values[1][2] = props.state.values[1]  //     +
      values[2][2] = props.state.values[2]  // + + +
      values[2][1] = props.state.values[3]
      values[2][0] = props.state.values[4]
      break;
    }
    case POSITION.BOTTOM_LEFT: {
      values[2][2] = props.state.values[0]  // +
      values[2][1] = props.state.values[1]  // +
      values[2][0] = props.state.values[2]  // + + +
      values[1][0] = props.state.values[3]
      values[0][0] = props.state.values[4]
      break;
    }
    case POSITION.TOP_LEFT: {
      values[2][0] = props.state.values[0]  // + + +
      values[1][0] = props.state.values[1]  // +
      values[0][0] = props.state.values[2]  // +
      values[0][1] = props.state.values[3]
      values[0][2] = props.state.values[4]
      break;
    }
  }

  return (
    <table >
      <thead></thead>
      <tbody> 
        <tr>
          <td> { values[0][0] && <Color choosed={values[0][0] === props.state.choosed} onClick={onClick} onLongPress={onLongPress} color={values[0][0]} size={props.state.size}/> } </td>
          <td> { values[0][1] && <Color choosed={values[0][1] === props.state.choosed} onClick={onClick} onLongPress={onLongPress} color={values[0][1]} size={props.state.size}/> } </td>
          <td> { values[0][2] && <Color choosed={values[0][2] === props.state.choosed} onClick={onClick} onLongPress={onLongPress} color={values[0][2]} size={props.state.size}/> } </td>
        </tr>
        <tr>
          <td> { values[1][0] && <Color choosed={values[1][0] === props.state.choosed} onClick={onClick} onLongPress={onLongPress} color={values[1][0]} size={props.state.size}/> } </td>
          <td> { values[1][1] && <Color choosed={values[1][1] === props.state.choosed} onClick={onClick} onLongPress={onLongPress} color={values[1][1]} size={props.state.size}/> } </td>
          <td> { values[1][2] && <Color choosed={values[1][2] === props.state.choosed} onClick={onClick} onLongPress={onLongPress} color={values[1][2]} size={props.state.size}/> } </td>
        </tr>
        <tr>
          <td> { values[2][0] && <Color choosed={values[2][0] === props.state.choosed} onClick={onClick} onLongPress={onLongPress} color={values[2][0]} size={props.state.size}/> } </td>
          <td> { values[2][1] && <Color choosed={values[2][1] === props.state.choosed} onClick={onClick} onLongPress={onLongPress} color={values[2][1]} size={props.state.size}/> } </td>
          <td> { values[2][2] && <Color choosed={values[2][2] === props.state.choosed} onClick={onClick} onLongPress={onLongPress} color={values[2][2]} size={props.state.size}/> } </td>
        </tr>
      </tbody>
      <tfoot></tfoot>
    </table>
  );
}
