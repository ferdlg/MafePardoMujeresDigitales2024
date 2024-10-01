import { useFetch } from '../../Hooks/useFetch';
import './Index.css';
export const Card = ({id, description, fetchData}) =>{

    const handleClick = ()=>{
       fetchData(false)
    };
    console.log('fetchData',fetchData)
    return(
        <article className="card">
            <section className="card__section">
                <h5 className='card__advice-title'>ADVICE #{id}</h5>
                <div className='card_container'>
                    <p className='card__container-text' >"{description}"</p>
                </div>
                <figure className='card__figure'>
                    <img className='card__figure-image--desktop' src ="src/assets/images/pattern-divider-desktop.svg" id='desktop' alt="divider-desktop" />
                    <img className='card__figure-image--mobile' src ="src/assets/images/pattern-divider-mobile.svg" id='mobile' alt="divider-mobile"/>
                </figure>
                <button className='card__button' onClick={()=> handleClick()}>
                    <img className='card__button-icon' src="src/assets/images/icon-dice.svg" alt="icon-dado" id='dado' />
                </button>
            </section>
        </article>
    );
};
