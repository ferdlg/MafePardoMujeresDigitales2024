import './Index.css';
export const Card = ({id, description, fetchData}) =>{

    const handleClick = ()=>{
       fetchData(false)
    };
    console.log('fetchData',fetchData)
    return(
        <article className="Card">
            <section className="Card-Section">
                <h5>ADVICE #{id}</h5>
                <p>"{description}"</p>
            </section>
            <section className="Card-Section">
                <figure className='Card-Section-Figure'>
                    <img src ="src/assets/images/pattern-divider-desktop.svg" id='desktop' alt="divider-desktop" />
                    <img src ="src/assets/images/pattern-divider-mobile.svg" id='mobile' alt="divider-mobile"/>
                </figure>
                <button onClick={()=> handleClick()}>
                    <img src="src/assets/images/icon-dice.svg" alt="icon-dado" id='dado' />
                </button>
            </section>
        </article>
    )
}