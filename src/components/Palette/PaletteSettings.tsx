import React from 'react';
import {PaletteState} from './Palette'

export const PaletteSettings = (props: PaletteState) => <div className="PaletteSettings" style={{position: 'fixed' as 'fixed', top: '30%', left: '30%'}}>
<table >
    <thead></thead>
    <tbody> 
      <tr><td><button onClick={() => props.setState({position: 315})}>315</button></td> <td><button onClick={() => props.setState({position: 0})}>0</button></td> <td><button  onClick={() => props.setState({position: 45})}>45</button></td> </tr> 
      <tr><td><button onClick={() => props.setState({position: 270})}>270</button></td> <td></td> <td><button  onClick={() => props.setState({position: 90})}>90</button></td> </tr> 
      <tr><td><button onClick={() => props.setState({position: 215})}>215</button></td> <td><button  onClick={() => props.setState({position: 180})}>180</button></td> <td><button  onClick={() => props.setState({position: 135})}>135</button></td> </tr> 
    </tbody>
    <tfoot></tfoot>
</table>
<input type="range" min="20" max="50" step="1" value={props.state.size} onChange={(e) => props.setState({size: Number(e.target.value)})}/> 
</div>
