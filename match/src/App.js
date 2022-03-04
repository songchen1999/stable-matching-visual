import logo from './logo.svg';
import './App.css';
import Man from './Man';
import React, { useState } from 'react';

function App() {
  const [ManData,SetManData] = useState(
    [
      ["Alex",["Felicia","Grace","Helen", "Ivy", "Judy"]],
      ["Bob",["Felicia","Grace","Helen", "Ivy", "Judy"]],
      ["Chad",["Felicia","Grace","Helen", "Ivy", "Judy"]],
      ["Darius",["Felicia","Grace","Helen", "Ivy", "Judy"]],
      ["Eli",["Felicia","Grace","Helen", "Ivy", "Judy"]]
    ]
  )

  return (
    <div className="App">
      <div className="Top">
        <div className="Men">
            {ManData.map(e=>(<Man name={e[0]} preferences={e[1]}/>))}
        </div>
        
        <div className="Women">
            <div>Felicia</div>
            <div>Grace</div>
            <div>Helen</div>
            <div>Ivy</div>
            <div>Judy</div>
            <div>Proposer</div>
        </div>
      </div>

      <div className="bottom">
        <div className="Buttons">
          <button type="button">Men propose</button>
          <button type="button">Women propose</button>
        </div>


      </div>

    </div>
  );
}

export default App;
