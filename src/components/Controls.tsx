import React from 'react';
import Palette from './Palette/Palette';
import Preview from './Preview';

  class Controls extends React.Component {
    // TODO load place/visibility of widgets

    state = {
      topLeft: {
        palette: <Palette />
      },
      topCenter: {},
      topRight: {},
      centerLeft: {},
      center: {},
      centerRight: {},
      bottomLeft: {},
      bottomCenter: {},
      bottomRight: { 
        preview: <Preview/>
      },
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

export default Controls;