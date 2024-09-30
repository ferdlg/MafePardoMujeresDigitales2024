import { Layout } from "../components/Layout";
import { Card } from "../components/Card/Index";
import { useFetch } from "../Hooks/useFetch";
import { useState } from "react";

export const Home = ()=>{
    const[url, setUrl] = useFetch('https://api.adviceslip.com/advice')
    const {data, loading, error} = useFetch(url);
    if(loading){
        return ("Loading...")
    }
    if(error){
        return ("Error:", error.message)
    }
    const handleClick = ()=>{
        setUrl('https://api.adviceslip.com/advice')
    };
    
    console.log(data.slip)
    return(
        <Layout>
            <Card
            slip = {data.slip}
            handleClick = {handleClick}
            />
        </Layout>
    )
}