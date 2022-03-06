import React, { useState } from 'react';

export default function Human(props) {
    return (
        <div>
            <div>{props.name || "Alex"}</div>
            <ul className="PreferList">
                {props.preferences &&  props.preferences.map(e=>(<li style={{display:"inline"}} onClick={a=>props.listRemoveClick(props.isMan ,props.name,e)}>{e}</li>))}
            </ul>
        </div>
    )
}