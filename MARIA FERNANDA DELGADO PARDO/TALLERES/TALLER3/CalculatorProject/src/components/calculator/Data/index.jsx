import React, {useState} from "react";
import DegreeCelsius from "../../core/Celsius";
import DegreeFahrenheit from "../../core/Fahrenheit";
import './index.css'

const Calculator = () => {
    const [celsiusInput, setCelsiusInput] = useState(0);

    return(
        <div className="calculator-container">
            <h1>Calculator</h1>
            <div className="iframe-container">
                <iframe src="https://giphy.com/embed/NAlKtCjLLHn1vhlItq" width="100%" height="100%">
                </iframe>
            </div>
            <DegreeCelsius
                celsiusInput={celsiusInput}
                setCelsiusInput={setCelsiusInput}
            />
            <DegreeFahrenheit
                celsius={celsiusInput}
            />
        </div>
    )
};

export default Calculator; 