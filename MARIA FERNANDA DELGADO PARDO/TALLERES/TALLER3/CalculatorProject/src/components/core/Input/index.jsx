import React from "react";
import './index.css'

const Input = ({name, value, onChange})=>{
    return(
        <div className="input">
            <label>{name}</label>
            <input type="number"
            value={value}
            onChange={onChange}
            />
        </div>
    );
};

export default Input;