import { useFetch } from '../../Hooks/useFetch';
import './Index.css';

export const Card = (props) => {
    const { slip , handleClick } = props;
    

    return (
        <article className="card">
            <section className="card__section">
                <h6 className="card__advice-title">ADVICE #{slip.id}</h6>
                <p className="card__advice-text">"{slip.advice}"</p>
                <figure className='card__figure'>
                    <img src="src/assets/images/pattern-divider-mobile.svg" className='card__figure-image--mobile' alt="divider-mobile" />
                    <img src="src/assets/images/pattern-divider-desktop.svg" className='card__figure-image--desktop' alt="divider-desktop" />
                </figure>
            <button className='card__button' onClick={handleClick}>
                <img src="src/assets/images/icon-dice.svg" className='card__button-icon' alt="icon-dado" />
            </button>
            </section>
        </article>
    );
};
