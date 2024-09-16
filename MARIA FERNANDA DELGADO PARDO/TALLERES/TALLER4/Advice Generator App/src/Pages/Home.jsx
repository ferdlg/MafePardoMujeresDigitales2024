import { Layout } from "../components/Layout";
import { Card } from "../components/Card/Index";
import { useFetch } from "../Hooks/useFetch";
import sweetAlert from "sweet-alert";

export const Home = ()=>{
    const {data, loading, error} = useFetch('https://api.adviceslip.com/advice');
    if(loading){
        return (sweetAlert("Loading..."))
    }
    if(error){
        return (sweetAlert("Error:" , error.message))
    }

    return(
        <Layout>
            <Card
            adviceNumber = data
            />
        </Layout>
    )
}