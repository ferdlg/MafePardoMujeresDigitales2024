import React, {useState} from "react";
import DegreeCelsius from "../../core/celsius";
import './index.css'

const Calculator = () => {

    return(
        <div className="calculator-container">
            <h1>Calculator</h1>
            <div className="iframe-container">
                <iframe src="https://giphy.com/embed/NAlKtCjLLHn1vhlItq" width="100%" height="100%">
                </iframe>
            </div>
            <DegreeCelsius></DegreeCelsius>
        </div>
    )
};

export default Calculator; 