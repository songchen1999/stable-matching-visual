import React, { useState } from 'react';

export default function Human(props) {
    return (
        <div>
            <div> 
                <span style={{ backgroundColor: props.name==props.Proposer?'yellow':'transparent'}} onClick={e=>props.clickAdd(props.name)}>{props.name}</span> 
                <button onClick={e=>props.addSwitch(props.isMan,props.name)} className='plus'></button> 
                <span>{props.pair}</span>
            </div>
            <ul className="PreferList">
                {props.preferences &&  props.preferences.map(e=>(<li style={{display:"inline",backgroundColor: e==props.Proposed&&props.name==props.Proposer ?'green':'transparent'}} onClick={a=>props.listRemoveClick(props.isMan ,props.name,e)}>{e}</li>))}
            </ul>
        </div>
    )
}