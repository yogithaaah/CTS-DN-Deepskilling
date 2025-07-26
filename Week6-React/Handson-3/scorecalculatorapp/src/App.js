import React from 'react';
import './Stylesheets/mystyle.css';
import { CalculateScore } from './Components/CalculateScore';

function App() {
  return (
    <div className="App">
      <CalculateScore 
        Name="Yogitha Tippireddy" 
        School="Nalanda Vidya Niketan" 
        total={425} 
        goal={500} 
      />
    </div>
  );
}

export default App;
