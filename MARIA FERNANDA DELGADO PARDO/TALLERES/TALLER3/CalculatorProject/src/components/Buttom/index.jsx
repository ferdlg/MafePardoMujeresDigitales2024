import React, { useState } from "react";
import './index.css'

const DregreeButtom = ({onClick, nameButton}) =>{
    
    return(
        <>
        <div className="deegre-buttom">
            <button onClick={onClick}> {nameButton}</button>
        </div>
        </>
    )
}

export default DregreeButtom;