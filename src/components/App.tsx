import React from 'react';

import Canvas from './Canvas';
import Controls from './Controls';

//https://github.com/typescript-cheatsheets/react-typescript-cheatsheet

const style = {
  display: 'flex',
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
};

function App() {
  return (
    <div style={style} className="App">
      <Controls />
      <Canvas />
    </div>
  );
}

export default App;
