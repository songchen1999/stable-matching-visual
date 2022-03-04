import React, { useState } from 'react';

export default function Man(props) {
    return (
        <div>
            {props.name || "Alex"}
            <ul className="PreferList">
                {props.preferences &&  props.preferences.map(e=>(<li style={{display:"inline"}}>{e}</li>))}
            </ul>
        </div>
    )
}