import React, { useEffect } from "react";
import '../../../calculatorF/calculator/Data/index.css'
import Input from "../../../Input";

const DegreeFahrenheit = ({celsius}) => {
    
    let fahrenheit = ((1.8 * celsius)+ 32);
    return(
            <Input
                name={'Fahrenheit'}
                value={fahrenheit}
                
            />
    )
}

export default DegreeFahrenheit;