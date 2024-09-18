import { Layout } from "../components/Layout";
import { Card } from "../components/Card/Index";
import { useFetch } from "../Hooks/useFetch";

export const Home = ()=>{
    const {data, loading, error} = useFetch('https://api.adviceslip.com/advice');
    if(loading){
        return ("Loading...")
    }
    if(error){
        return ("Error:", error.message)
    }
    
    console.log(data.slip)
    return(
        <Layout>
            <Card
            slip = {data.slip}
            />
        </Layout>
    )
}