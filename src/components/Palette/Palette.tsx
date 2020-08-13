import React from 'react';
import { PaletteSettings } from './PaletteSettings';
import ViewTable from './ViewTable';
import ViewRow from './ViewRow';
import { POSITION } from '../Controls'

export type PaletteState = {
  setState: Function
  state: any
}

export type PaletteParameters = {
  position: number,
  size: number,
  values: Array<string>
}

export default class Palette extends React.Component<PaletteParameters> {
  constructor(props: PaletteParameters) {
    super(props);
    this.showSettings = this.showSettings.bind(this);
    this.setState = this.setState.bind(this);
  }

  state = {
    position: this.props.position,
    size: this.props.size,
    values: this.props.values,
    settings: false
  }

  render() {
    let showSettings = this.showSettings;

    return (
      <div className="Palette">
        {this.state.settings && <PaletteSettings setState={this.setState} state={this.state} />}
        {
          [ 
            POSITION.BOTTOM_RIGHT, 
            POSITION.BOTTOM_LEFT, 
            POSITION.TOP_LEFT, 
            POSITION.TOP_RIGHT
          ].includes(this.state.position) ?
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
