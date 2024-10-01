import { Layout } from "../components/Layout";
import { Data } from "../components/Data";
import { useContext, useEffect } from "react";
import Context from "../context/context";

export const Home = ()=>{
    const {fetchData} = useContext(Context);
    useEffect(() =>{
        fetchData();
    }, []);

    return(
        <>
            <Layout>
                <Data/>
            </Layout>
   
        </>
    );
};