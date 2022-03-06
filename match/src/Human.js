import React, { useState } from 'react';

export default function Human(props) {
    return (
        <div>
            <div> 
                <span onClick={e=>props.clickAdd(props.name)}>{props.name || "Alex"}</span> 
                <button onClick={e=>props.addSwitch(props.isMan,props.name)} className='plus'></button> 
            </div>
            <ul className="PreferList">
                {props.preferences &&  props.preferences.map(e=>(<li style={{display:"inline"}} onClick={a=>props.listRemoveClick(props.isMan ,props.name,e)}>{e}</li>))}
            </ul>
        </div>
    )
}