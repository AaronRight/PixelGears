import React from 'react';
import Palette from './Palette/Palette';
import Preview from './Preview';

export enum POSITION{
  TOP_LEFT = 315,    TOP_CENTER = 0,      TOP_RIGHT = 45,
  CENTER_LEFT= 270,                       CENTER_RIGHT = 90,
  BOTTOM_LEFT = 215, BOTTOM_CENTER = 180, BOTTOM_RIGHT = 135 
}

export default  class Controls extends React.Component {
    /*
      this.state = {
      position: 90,
      size: 25,
      values: ["#ff0000", "#ffff00", "#00ff00", "#00ffff", "#0000ff"],
      settings: false
    }
    */
    state = {
      topLeft: {},
      topCenter: {},
      topRight: {},
      centerLeft: {},
      center: {},
      centerRight: {},
      bottomLeft: {},
      bottomCenter: {},
      bottomRight: {},
    }

    componentDidMount(){
      // load / default parameters

      this.setState({
        topLeft: {
          palette: <Palette 
            position={POSITION.TOP_LEFT} 
            size={25}
            values={["#ff0000", "#ffff00", "#00ff00", "#00ffff", "#0000ff"]}
          />
        },
        bottomRight: { 
          preview: <Preview/>
        },
      })
    }

    render(){
      return (
        <div className="Controls">
          <div className="ControlRow">
      <div  style={{ justifyContent: 'flex-start', alignItems: 'flex-start' }} className="ControlCell"> { Object.values(this.state.topLeft) } </div>
            <div  style={{ justifyContent: 'center', alignItems: 'flex-start' }} className="ControlCell"> { Object.values(this.state.topCenter) } </div>
            <div  style={{ justifyContent: 'flex-end', alignItems: 'flex-start' }} className="ControlCell"> { Object.values(this.state.topRight) } </div>
          </div>
          <div className="ControlRow">
            <div  style={{ justifyContent: 'flex-start', alignItems: 'center' }} className="ControlCell">  { Object.values(this.state.centerLeft) }  </div>
            <div  style={{ justifyContent: 'center', alignItems: 'center' }} className="ControlCell">  { Object.values(this.state.center) } </div>
            <div  style={{ justifyContent: 'flex-end', alignItems: 'center' }} className="ControlCell">  { Object.values(this.state.centerRight) } </div>
          </div>
          <div className="ControlRow">
            <div  style={{ justifyContent: 'flex-start', alignItems: 'flex-end' }} className="ControlCell">   { Object.values(this.state.bottomLeft) }  </div>
            <div  style={{ justifyContent: 'center', alignItems: 'flex-end' }} className="ControlCell">   { Object.values(this.state.bottomCenter) }  </div>
            <div  style={{ justifyContent: 'flex-end', alignItems: 'flex-end' }} className="ControlCell">  { Object.values(this.state.bottomRight) } </div>
          </div>
        </div>
      );
    }
}