import React from 'react';
import Palette from './Palette/Palette';
import Preview from './Preview';

export enum POSITION {
  TOP_LEFT = 'topLeft', TOP_CENTER = 'topCenter', TOP_RIGHT = 'topRight',
  CENTER_LEFT = 'centerLeft', CENTER_RIGHT = 'centerRight',
  BOTTOM_LEFT = 'bottomLeft', BOTTOM_CENTER = 'bottomCenter', BOTTOM_RIGHT = 'bottomRight'
}

export default class Controls extends React.Component {
  constructor(props: any) {
    super(props);
    this.setPosition = this.setPosition.bind(this);
  }

  state = {
    palette: POSITION.TOP_LEFT,
    preview: POSITION.BOTTOM_RIGHT
  }

  setPosition(newPosition: POSITION) {
    this.setState({ palette: newPosition });
  }

  componentDidMount() {
    // load / default parameters

    this.setState({
      topLeft: {
        palette: <Palette
          setPosition={this.setPosition}
          position={POSITION.TOP_LEFT}
          size={25}
          values={["#ff0000", "#ffff00", "#00ff00", "#00ffff", "#0000ff"]}
        />
      },
      bottomRight: {
        preview: <Preview />
      },
    })
  }

  render() {
    return (
      <div className="Controls">
        <div className="ControlRow">
          <div style={{ justifyContent: 'flex-start', alignItems: 'flex-start' }} className="ControlCell">
            {this.state.palette === POSITION.TOP_LEFT && <Palette
              setPosition={this.setPosition}
              position={POSITION.TOP_LEFT}
              size={25}
              values={["#ff0000", "#ffff00", "#00ff00", "#00ffff", "#0000ff"]}
            />}
          </div>
          <div style={{ justifyContent: 'center', alignItems: 'flex-start' }} className="ControlCell">
            {this.state.palette === POSITION.TOP_CENTER && <Palette
              setPosition={this.setPosition}
              position={POSITION.TOP_CENTER}
              size={25}
              values={["#ff0000", "#ffff00", "#00ff00", "#00ffff", "#0000ff"]}
            />}
          </div>
          <div style={{ justifyContent: 'flex-end', alignItems: 'flex-start' }} className="ControlCell">
            {this.state.palette === POSITION.TOP_RIGHT && <Palette
              setPosition={this.setPosition}
              position={POSITION.TOP_RIGHT}
              size={25}
              values={["#ff0000", "#ffff00", "#00ff00", "#00ffff", "#0000ff"]}
            />}
          </div>
        </div>
        <div className="ControlRow">
          <div style={{ justifyContent: 'flex-start', alignItems: 'center' }} className="ControlCell">
            {this.state.palette === POSITION.CENTER_LEFT && <Palette
              setPosition={this.setPosition}
              position={POSITION.CENTER_LEFT}
              size={25}
              values={["#ff0000", "#ffff00", "#00ff00", "#00ffff", "#0000ff"]}
            />}
          </div>
          <div style={{ justifyContent: 'center', alignItems: 'center' }} className="ControlCell">
          </div>
          <div style={{ justifyContent: 'flex-end', alignItems: 'center' }} className="ControlCell">
            {this.state.palette === POSITION.CENTER_RIGHT && <Palette
              setPosition={this.setPosition}
              position={POSITION.CENTER_RIGHT}
              size={25}
              values={["#ff0000", "#ffff00", "#00ff00", "#00ffff", "#0000ff"]}
            />}
          </div>
        </div>
        <div className="ControlRow">
          <div style={{ justifyContent: 'flex-start', alignItems: 'flex-end' }} className="ControlCell">
          {this.state.palette === POSITION.BOTTOM_LEFT && <Palette
              setPosition={this.setPosition}
              position={POSITION.BOTTOM_LEFT}
              size={25}
              values={["#ff0000", "#ffff00", "#00ff00", "#00ffff", "#0000ff"]}
            />}
            </div>
          <div style={{ justifyContent: 'center', alignItems: 'flex-end' }} className="ControlCell">
          {this.state.palette === POSITION.BOTTOM_CENTER && <Palette
              setPosition={this.setPosition}
              position={POSITION.BOTTOM_CENTER}
              size={25}
              values={["#ff0000", "#ffff00", "#00ff00", "#00ffff", "#0000ff"]}
            />}
             </div>
          <div style={{ justifyContent: 'flex-end', alignItems: 'flex-end' }} className="ControlCell">
          {this.state.palette === POSITION.BOTTOM_RIGHT && <Palette
              setPosition={this.setPosition}
              position={POSITION.BOTTOM_RIGHT}
              size={25}
              values={["#ff0000", "#ffff00", "#00ff00", "#00ffff", "#0000ff"]}
            />}
             </div>
        </div>
      </div>
    );
  }
}