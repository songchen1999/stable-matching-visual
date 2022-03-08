import logo from './logo.svg';
import './App.css';
import Human from './Human';
import React, { useState } from 'react';

function App() {
  const [ManData,SetManData] = useState(
    [
      ["Alex",["Felicia","Grace","Helen", "Ivy", "Judy"],false],
      ["Bob",["Felicia","Grace","Helen", "Ivy", "Judy"],false],
      ["Chad",["Felicia","Grace","Helen", "Ivy", "Judy"],false],
      ["Darius",["Felicia","Grace","Helen", "Ivy", "Judy"],false],
      ["Eli",["Felicia","Grace","Helen", "Ivy", "Judy"],false]
    ]
  )

  const [WomanData,SetWomanData] = useState(
    [
      ["Felicia",["Alex","Bob","Chad","Darius","Eli"],false],
      ["Grace",["Alex","Bob","Chad","Darius","Eli"],false],
      ["Helen",["Alex","Bob","Chad","Darius","Eli"],false], 
      ["Ivy",["Alex","Bob","Chad","Darius","Eli"],false], 
      ["Judy",["Alex","Bob","Chad","Darius","Eli"],false]]
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
  function startSelectSwitch(isMan, addTo){

    const nData = ManData.map(e=>[e[0],e[1],addTo==e[0]?true:false])
    SetManData(nData)
    const nData2 = WomanData.map(e=>[e[0],e[1],addTo==e[0]?true:false])
    SetWomanData(nData2)
    
  }

  // click at a name and add it to a preference list
  function clickAdd(add){

    const nData = ManData.map(e=>[e[0]
        ,e[1].filter(

              a=>a!=add || !e[2]
          
            )
        ,e[2]]
        )
    
    for(const arr of nData){
      if(arr[2]){
        arr[1].push(add)
      }
    }
    SetManData(nData)

    const nData2 = WomanData.map(e=>[e[0]
      ,e[1].filter(

        a=>a!=add || !e[2]
        
          )
      ,e[2]]
      )
  
    for(const arr of nData2){
      if(arr[2]){
        arr[1].push(add)
      }
    }
    SetWomanData(nData2)
    
  }



  return (
    <div className="App">

        <div className="Men">
            {ManData.map(e=>(<Human name={e[0]} isMan={true} clickAdd={clickAdd} addSwitch= {startSelectSwitch} listRemoveClick={preferClick} preferences={e[1]}/>))}
        </div>
        
        <div className="Women">
            {WomanData.map(e=>(<Human name={e[0]} isMan={false} clickAdd={clickAdd} addSwitch= {startSelectSwitch} listRemoveClick={preferClick} preferences={e[1]}/>))}
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
