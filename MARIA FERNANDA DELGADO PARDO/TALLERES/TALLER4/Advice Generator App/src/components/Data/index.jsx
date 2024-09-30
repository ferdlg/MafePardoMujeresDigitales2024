import { useContext } from "react";
import { Card } from "../Card/Index";
import Context from "../../context/context";

export const Data = () =>{
    const {slip, loading, fetchData} = useContext(Context);

    return(
        <Card
            id = {slip.id}
            description = {slip.advice}
            loading = {loading}
            fetchData={fetchData}
        />
    );
};