import React, {useState} from "react";
import  '../../../calculatorF/calculator/Data/index.css';
import Fahrenheit from "../../../calculatorC/core/Fahrenheit";
import Celsius from "../../../calculatorC/core/Celsius";

const CalculatorFtoC = ()=> {
    const [fahrenheitInput, setfahrenheitInput] = useState(0);
    return(
        <>
            <div className="calculator-container">
                <Fahrenheit
                    fahrenheitInput={fahrenheitInput}
                    setFahrenheitInput={setfahrenheitInput}
                />
                <Celsius
                    fahrenheit={fahrenheitInput}
                />
            </div>
        </>
    )
}

export default CalculatorFtoC;
