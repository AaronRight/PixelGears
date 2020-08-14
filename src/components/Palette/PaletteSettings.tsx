import React from 'react';
import { POSITION } from '../Controls'

export type PaletteStateExtended = {
  setState: Function
  state: any,
  setPosition: Function
}

export function PaletteSettings(props: PaletteStateExtended) {
  function setPosition(newPosition: POSITION) {
    props.setState({position: newPosition})
    props.setPosition(newPosition);
  }

  return (<div className="PaletteSettings" style={{ position: 'fixed' as 'fixed', top: '30%', left: '30%' }}>
    <table >
      <thead></thead>
      <tbody>
        <tr>
          <td><button onClick={() => setPosition(POSITION.TOP_LEFT)}>315</button></td>
          <td><button onClick={() => setPosition(POSITION.TOP_CENTER)}>0</button></td>
          <td><button onClick={() => setPosition(POSITION.TOP_RIGHT)}>45</button></td>
        </tr>
        <tr>
          <td><button onClick={() => setPosition(POSITION.CENTER_LEFT)}>270</button></td>
          <td></td>
          <td><button onClick={() => setPosition(POSITION.CENTER_RIGHT)}>90</button></td>
        </tr>
        <tr>
          <td><button onClick={() => setPosition(POSITION.BOTTOM_LEFT)}>215</button></td>
          <td><button onClick={() => setPosition(POSITION.BOTTOM_CENTER)}>180</button></td>
          <td><button onClick={() => setPosition(POSITION.BOTTOM_RIGHT)}>135</button></td>
        </tr>
      </tbody>
      <tfoot></tfoot>
    </table>
    <input type="range" min="20" max="50" step="1" value={props.state.size} onChange={(e) => props.setState({ size: Number(e.target.value) })} />
  </div>
  )
}
