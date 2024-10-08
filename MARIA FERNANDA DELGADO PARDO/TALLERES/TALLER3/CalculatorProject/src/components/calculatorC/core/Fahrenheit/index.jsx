import React , {useState} from "react";
import Input from "../../../Input";

const Fahrenheit = ({fahrenheitInput, setFahrenheitInput})=>{
    return(
        <>
            <Input
                name={'Fahrenheit'}
                value={fahrenheitInput}
                onChange= {(e)=>{setFahrenheitInput(e.target.value)}}
            />
        </>
            
    )
}
export default Fahrenheit;