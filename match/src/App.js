import logo from './logo.svg';
import './App.css';
import Human from './Human';
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

  const [WomanData,SetWomanData] = useState(
    [
      ["Felicia",["Alex","Bob","Chad","Darius","Eli"]],
      ["Grace",["Alex","Bob","Chad","Darius","Eli"]],
      ["Helen",["Alex","Bob","Chad","Darius","Eli"]], 
      ["Ivy",["Alex","Bob","Chad","Darius","Eli"]], 
      ["Judy",["Alex","Bob","Chad","Darius","Eli"]]]
  )
  
  // remove a person from a preferList
  function preferClick(isMan,removeFrom,remove){
    if (isMan){
      const nData = ManData.map(e=>[e[0],e[1].filter((a)=>e[0]!=removeFrom || ( e[0]==removeFrom && a!=remove))])
      SetManData(nData)
    }
    else {
      const nData = WomanData.map(e=>[e[0],e[1].filter((a)=>e[0]!=removeFrom || ( e[0]==removeFrom && a!=remove))])
      SetWomanData(nData)
    }
  }

  // click at a name and allow selection of new prefers
  function startSelectClick(){

  }

  // click at a name and add it to a preference list
  function clickAdd(){

  }



  return (
    <div className="App">
      <div className="Top">
        <div className="Men">
            {ManData.map(e=>(<Human name={e[0]} isMan={true} listRemoveClick={preferClick} preferences={e[1]}/>))}
        </div>
        
        <div className="Women">
            {WomanData.map(e=>(<Human name={e[0]} isMan={false} listRemoveClick={preferClick} preferences={e[1]}/>))}
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
