import React from "react";
import './index.css'

const Input = ({name, value})=>{
    return(
        <div className="input">
            <label>{name}</label>
            <input type="number" value={value}/>
        </div>
    );
};

export default Input;