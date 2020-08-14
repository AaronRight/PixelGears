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
  position: string,
  size: number,
  values: Array<string>,
  setPosition: Function
}

export default class Palette extends React.Component<PaletteParameters> {
  constructor(props: PaletteParameters) {
    super(props);
    this.setState = this.setState.bind(this);
  }

  state = {
    position: this.props.position as POSITION,
    size: this.props.size,
    choosed: '',
    values: this.props.values,
    settings: false
  }

  render() {
    return (
      <div className="Palette">
        {this.state.settings && <PaletteSettings setState={this.setState} state={this.state} setPosition={this.props.setPosition}/>}
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
}
