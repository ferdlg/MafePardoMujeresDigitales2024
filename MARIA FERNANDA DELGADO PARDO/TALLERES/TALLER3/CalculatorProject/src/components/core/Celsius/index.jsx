import React , {useState} from "react";
import Input from "../Input";
import DegreeFahrenheit from "../Fahrenheit";

const DegreeCelsius = ()=>{
    const [celsiusInput, setCelsiusInput] = useState(0);

    const handleChangeInput = (e) =>{
        setCelsiusInput(e.target.value);
    }
    return(
        <>
            <Input
                name={'Celsius'}
            />
            <DegreeFahrenheit
            celsius={celsiusInput}
            />
        </>
            
    )
}
export default DegreeCelsius;