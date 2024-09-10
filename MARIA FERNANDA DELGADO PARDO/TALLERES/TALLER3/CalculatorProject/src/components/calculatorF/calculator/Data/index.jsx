import React, {useState} from "react";
import DegreeCelsius from "../../core/Celsius";
import DegreeFahrenheit from "../../core/Fahrenheit";
import './index.css'

const CalculatorCToF = () => {
    const [celsiusInput, setCelsiusInput] = useState(0);
    return(
        <div className="calculator-container">
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

export default CalculatorCToF; 