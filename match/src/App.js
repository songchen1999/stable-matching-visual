import logo from './logo.svg';
import './App.css';
import Human from './Human';
import React, { useState } from 'react';
import { a } from 'react-spring';

function App() {


  const [Proposer,SetProposer] = useState("")
  const [Proposed,SetProposed] = useState("")

  const [ManData,SetManData] = useState(
    [
      ["Alex",["Felicia","Grace","Helen", "Ivy", "Judy"],false,""],
      ["Bob",["Felicia","Grace","Helen", "Ivy", "Judy"],false,""],
      ["Chad",["Felicia","Grace","Helen", "Ivy", "Judy"],false,""],
      ["Darius",["Felicia","Grace","Helen", "Ivy", "Judy"],false,""],
      ["Eli",["Felicia","Grace","Helen", "Ivy", "Judy"],false,""]
    ]
  )

  const [WomanData,SetWomanData] = useState(
    [
      ["Felicia",["Alex","Bob","Chad","Darius","Eli"],false,""],
      ["Grace",["Alex","Bob","Chad","Darius","Eli"],false,""],
      ["Helen",["Alex","Bob","Chad","Darius","Eli"],false,""], 
      ["Ivy",["Alex","Bob","Chad","Darius","Eli"],false,""], 
      ["Judy",["Alex","Bob","Chad","Darius","Eli"],false,""]]
  )
  
  // remove a person from a preferList
  function preferClick(isMan,removeFrom,remove){
    if (isMan){
      const nData = ManData.map(e=>[e[0],e[1].filter((a)=>e[0]!=removeFrom || ( e[0]==removeFrom && a!=remove)),e[2],""])
      SetManData(nData)
    }
    else {
      const nData = WomanData.map(e=>[e[0],e[1].filter((a)=>e[0]!=removeFrom || ( e[0]==removeFrom && a!=remove)),e[2],""])
      SetWomanData(nData)
    }
  }

  // click at a name and allow selection of new prefers
  function startSelectSwitch(isMan, addTo){

    const nData = ManData.map(e=>[e[0],e[1],addTo==e[0]?true:false,e[3]])
    SetManData(nData)
    const nData2 = WomanData.map(e=>[e[0],e[1],addTo==e[0]?true:false,e[3]])
    SetWomanData(nData2)
    
  }

  // click at a name and add it to a preference list
  function clickAdd(add,isMan){
    if(!isMan){
      const nData = ManData.map(e=>[e[0]
        ,e[1].filter(

              a=>a!=add || !e[2]
          
            )
        ,e[2],""]
        )
    
      for(const arr of nData){
        if(arr[2]){
          arr[1].push(add)
        }
      }

      SetManData(nData)

    }
    else{
      const nData2 = WomanData.map(e=>[e[0]
        ,e[1].filter(
  
          a=>a!=add || !e[2]
          
            )
        ,e[2],""]
        )
    
      for(const arr of nData2){
        if(arr[2]){
          arr[1].push(add)
        }
      }

      SetWomanData(nData2)

    }


    
    
  }


  function delay(milliseconds){
    return new Promise(resolve => {
        setTimeout(resolve, milliseconds);
    });
  }

  async function menPropose(){


    // check if all partnered

    let c = 0
    for(const d of ManData) {
      if(d[3]!=""){
        c++
      }
    }
    if(c==ManData.length){
      alert("press clear first")
      return
    }

    // check if all have complete

    for(const d of ManData) {
      if(d[1].length!=ManData.length){
        alert("Men's list is not complete")

        return
      }
    }

    for(const d of WomanData) {
      if(d[1].length!=ManData.length){
        alert("Women's list is not complete")

        return
      }
    }



    // start with each man

    const ManDataCopy = ManData.map(e=>(e.map(a=>a)))

    const WomanDataCopy = WomanData.map(e=>(e.map(a=>a)))

    let finished = 0

    while (finished<ManDataCopy.length){



      console.log("loop")



      for(let Man4 of ManDataCopy){


        // continue to next if paired
        if (Man4[3]!=""){
          continue
        }

        // pause for one second
        await delay(1000);

        // set the current proposer
        // remove the proposed from previous propser
        SetProposer(Man4[0])
        SetProposed("")

        // man's current partner
        let paired = Man4[3]

        // man name
        let name = Man4[0]
        console.log(name,paired)
        // man preference list
        let list = Man4[1]


        let found =  false
        // try proposing to women in the preference list
        for(let WomanName of list){



          // pause for one second
          await delay(1000);

          SetProposed(WomanName)
          console.log(WomanName)

          
          // find the woman he is proposing to
          for(const Woman of WomanDataCopy){
            // find the woman
            if (Woman[0]==WomanName){
              // find out if he is higher in the list than the woman's current partner
              for(let m of Woman[1]){
                // he is not 
                if(m==Woman[3]){
                  Woman[3] = m
                  break
                }
                // he is
                else if(m==name){
                  // the old partner is kicked out
                  let oldP = Woman[3]
                  // find and remove the old partner's partner
                  if (oldP!=""){
                    for (let Man44 of ManDataCopy) {
                      if (Man44[0] == oldP){
                        Man44[3] = ""
                        break
                      }
                    }
                  }
                  else {
                    console.log(finished,oldP)
                    finished++
                  }


                  Woman[3] = name
                  paired = WomanName
                  Man4[3] = paired
                  found = true
                  break
                }
              }
              break
            }
          }

          // if found exit
          if (found){

            SetManData(ManDataCopy)
            SetWomanData(WomanDataCopy)
            console.log(ManDataCopy,WomanDataCopy)
            break
          }

        }

      }

    }
    await delay(1000);
    const nData = ManDataCopy.map(e=>[e[0],e[1],e[2],e[3]])
    SetManData(nData)
    const nData2 = WomanDataCopy.map(e=>[e[0],e[1],e[2],e[3]])
    SetWomanData(nData2)
    SetProposer("")
    SetProposed("")


  }

  async function womenPropose(){


    // check if all partnered

    let c = 0
    for(const d of WomanData) {
      if(d[3]!=""){
        c++
      }
    }
    if(c==WomanData.length){
      alert("press clear first")
      return
    }

    

    // check if all have complete

    for(const d of ManData) {
      if(d[1].length!=ManData.length){
        alert("Men's list is not complete")

        return
      }
    }

    for(const d of WomanData) {
      if(d[1].length!=ManData.length){
        alert("Women's list is not complete")

        return
      }
    }


    // start with each man

    const ManDataCopy = ManData.map(e=>(e.map(a=>a)))

    const WomanDataCopy = WomanData.map(e=>(e.map(a=>a)))

    let finished = 0

    while (finished<WomanDataCopy.length){



      console.log("loop")



      for(let Woman4 of WomanDataCopy){


        // continue to next if paired
        if (Woman4[3]!=""){
          continue
        }

        // pause for one second
        await delay(1000);

        // set the current proposer
        // remove the proposed from previous propser
        SetProposer(Woman4[0])
        SetProposed("")

        // man's current partner
        let paired = Woman4[3]

        // man name
        let name = Woman4[0]
        console.log(name,paired)
        // man preference list
        let list = Woman4[1]


        let found =  false
        // try proposing to women in the preference list
        for(let ManName of list){



          // pause for one second
          await delay(1000);

          SetProposed(ManName)
          console.log(ManName)

          
          // find the woman he is proposing to
          for(const Man of ManDataCopy){
            // find the woman
            if (Man[0]==ManName){
              // find out if he is higher in the list than the woman's current partner
              for(let w of Man[1]){
                // he is not 
                if(w==Man[3]){
                  Man[3] = w
                  break
                }
                // he is
                else if(w==name){
                  // the old partner is kicked out
                  let oldP = Man[3]
                  // find and remove the old partner's partner
                  if (oldP!=""){
                    for (let Woman44 of WomanDataCopy) {
                      if (Woman44[0] == oldP){
                        Woman44[3] = ""
                        break
                      }
                    }
                  }
                  else {
                    console.log(finished,oldP)
                    finished++
                  }


                  Man[3] = name
                  paired = ManName
                  Woman4[3] = paired
                  found = true
                  break
                }
              }
              break
            }
          }

          // if found exit
          if (found){

            SetManData(ManDataCopy)
            SetWomanData(WomanDataCopy)
            console.log(WomanDataCopy,ManDataCopy)
            break
          }

        }

      }

    }
    await delay(1000);
    const nData = ManDataCopy.map(e=>[e[0],e[1],e[2],e[3]])
    SetManData(nData)
    const nData2 = WomanDataCopy.map(e=>[e[0],e[1],e[2],e[3]])
    SetWomanData(nData2)
    SetProposer("")
    SetProposed("")


  }

  function random(){
    function shuffleArray(array) {
      for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
      }
    }

    const nData = ManData.map(
      e=>[e[0],
          e[1].map(value => ({ value, sort: Math.random() })).sort((a, b) => a.sort - b.sort).map(({ value }) => value),
      e[2],
      ""])
    SetManData(nData)
    const nData2 = WomanData.map(
    e=>[e[0],
    e[1].map(value => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value),
    
    e[2],
    ""])
    SetWomanData(nData2)
    


      


  }

  function clear(){
    const nData = ManData.map(
      e=>[e[0],
          e[1],
      e[2],
      ""])
    SetManData(nData)
    const nData2 = WomanData.map(
    e=>[e[0],
    e[1],
    e[2],
    ""])
    SetWomanData(nData2)
  }




  return (
    <div className="App">

        <div className="Men">
            {ManData.map(e=>(<Human Proposed={Proposed} Proposer={Proposer} name={e[0]} isMan={true} clickAdd={clickAdd} addSwitch= {startSelectSwitch} adding={e[2]} listRemoveClick={preferClick} preferences={e[1]} pair={e[3]}/>))}
        </div>
        
        <div className="Women">
            {WomanData.map(e=>(<Human Proposed={Proposed} Proposer={Proposer} name={e[0]} isMan={false} clickAdd={clickAdd} addSwitch= {startSelectSwitch} adding={e[2]} listRemoveClick={preferClick} preferences={e[1]} pair={e[3]}/>))}
        </div>


      <div className="bottom">
        <div className="Buttons">
          <button type="button" onClick={e=>{menPropose()}}>Men propose</button>
          <button type="button"onClick={e=>{random()}}>Randomize</button>
          <button type="button"onClick={e=>{clear()}}>Clear</button>
          <button type="button"onClick={e=>{womenPropose()}}>Women propose</button>

        </
        div>

        <div className='Situation'> {Proposer? Proposer+" proposes to "+Proposed : ""}</div>


      </div>

    </div>
  );
}

export default App;
