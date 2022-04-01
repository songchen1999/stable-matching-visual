import React, { useState } from 'react';

export default function Human(props) {

    let add = "Add Candiates to "+props.name+"'s list"
    let ADDING = "Adding Candiates"

    return (
        <div>
            <div> 
                <span style={{ backgroundColor: props.name==props.Proposer?'yellow':(props.name==props.Proposed?'blue':'transparent')}} onClick={e=>props.clickAdd(props.name,props.isMan)}>{props.name}</span> 
                <button style={{ backgroundColor: props.adding?'yellow':'transparent'}} onClick={e=>props.addSwitch(props.isMan,props.name)} className='plus'>{!props.adding? add:ADDING}</button> 
                <span>{props.pair}</span>
            </div>
            <ul className="PreferList">
                {props.preferences &&  props.preferences.map(e=>(<li style={{display:"inline",backgroundColor: e==props.Proposed&&props.name==props.Proposer ?'green':'transparent'}} onClick={a=>props.listRemoveClick(props.isMan ,props.name,e)}>{e}</li>))}
            </ul>
        </div>
    )
}