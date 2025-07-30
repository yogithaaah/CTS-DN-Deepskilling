import React from 'react';
import ListofPlayers from './ListofPlayers';
import IndianPlayers from './IndianPlayers';

function App() {
  const flag = true; // change to false to see IndianPlayers component

  return (
    <div className="App">
      {flag ? <ListofPlayers /> : <IndianPlayers />}
    </div>
  );
}

export default App;
