import React from "react";
import Context from "./context";
import {useFetch} from '../Hooks/useFetch';

export const Provider = ({children}) => {
    const {
        data : {slip},
        loading,
        error, 
        fetchData
    } = useFetch();

    return(
        <Context.Provider value={{slip, loading,error, fetchData }} >
            {children}
        </Context.Provider>
    )
}