import React , {useState} from "react";
import Input from "../../../Input";

const DegreeCelsius = ({celsiusInput, setCelsiusInput})=>{
    return(
        <>
            <Input
                name={'Celsius'}
                value={celsiusInput}
                onChange= {(e)=>{setCelsiusInput(e.target.value)}}
            />
        </>
            
    )
}
export default DegreeCelsius;