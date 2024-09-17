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
    const slip = Object.values(data);
    console.log(slip)
    return(
        <Layout>
            {slip.map((advice)=>{
                return(
                    <Card
                    key = {advice.id}
                    adviceNumber = {advice.id}
                    adviceDescription = {advice.advice}
                    />
                )
            })}
        </Layout>
    )
}