import React from 'react';
import { PaletteSettings } from './PaletteSettings';
import ViewTable from './ViewTable';
import ViewRow from './ViewRow';

export type PaletteState = {
  setState: Function
  state: any
}

/*
Possible positions:
315 000 045  
270     090  
215 180 135
*/

export default class Palette extends React.Component {
  constructor(props: any) {
    super(props);
    this.showSettings = this.showSettings.bind(this);
    this.setState = this.setState.bind(this);
  }

  state = {
    position: 90,
    size: 25,
    values: ["#ff0000", "#ffff00", "#00ff00", "#00ffff", "#0000ff"],
    settings: false
  }

  render() {
    let showSettings = this.showSettings;

    return (
      <div className="Palette">
        {this.state.settings && <PaletteSettings setState={this.setState} state={this.state} />}
        {
          [45, 135, 215, 315].includes(this.state.position) ?
            <ViewTable setState={this.setState} state={this.state} /> :
            <ViewRow setState={this.setState} state={this.state} />
        }
      </div>
    );
  }

  showSettings() {
    this.setState((state: any) => { return { settings: !state.settings } });
  }
}
