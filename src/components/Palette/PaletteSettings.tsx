import React from 'react';
import { PaletteState } from './Palette'
import { POSITION } from '../Controls'

export const PaletteSettings = (props: PaletteState) => <div className="PaletteSettings" style={{ position: 'fixed' as 'fixed', top: '30%', left: '30%' }}>
  <table >
    <thead></thead>
    <tbody>
      <tr>
        <td><button onClick={() => props.setState({ position: POSITION.TOP_LEFT })}>315</button></td>
        <td><button onClick={() => props.setState({ position: POSITION.TOP_CENTER })}>0</button></td>
        <td><button onClick={() => props.setState({ position: POSITION.TOP_RIGHT })}>45</button></td>
      </tr>
      <tr>
        <td><button onClick={() => props.setState({ position: POSITION.CENTER_LEFT })}>270</button></td> 
        <td></td> 
        <td><button onClick={() => props.setState({ position: POSITION.CENTER_RIGHT })}>90</button></td> 
      </tr>
      <tr>
        <td><button onClick={() => props.setState({ position: POSITION.BOTTOM_LEFT })}>215</button></td> 
        <td><button onClick={() => props.setState({ position: POSITION.BOTTOM_CENTER })}>180</button></td> 
        <td><button onClick={() => props.setState({ position: POSITION.BOTTOM_RIGHT })}>135</button></td> 
      </tr>
    </tbody>
    <tfoot></tfoot>
  </table>
  <input type="range" min="20" max="50" step="1" value={props.state.size} onChange={(e) => props.setState({ size: Number(e.target.value) })} />
</div>
