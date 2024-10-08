import React , {useState} from "react";
import Input from "../../../Input";

const Celsius = ({fahrenheit})=>{
    let celsius = ((fahrenheit-32)*(5/9));
    return(
        <>
            <Input
                name={'Celsius'}
                value={celsius}
            />
        </>
            
    )
}
export default Celsius;