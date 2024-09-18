import './Index.css';
export const Card = (props) =>{
    const {slip} = props
    return(
        <article className="Card">
            <section className="Card-Section">
                <h3>ADVICE #{slip.id}</h3>
                <p>"{slip.advice}"</p>
            </section>
            <section className="Card-Section">
                <figure className='Card-Section-Figure'>
                    <img src ="src/assets/images/pattern-divider-desktop.svg" id='desktop' alt="divider-desktop" />
                    <img src ="src/assets/images/pattern-divider-mobile.svg" id='mobile' alt="divider-mobile"/>
                    <img src="src/assets/images/icon-dice.svg" alt="icon-dado" id='dado' />
                </figure>
            </section>
        </article>
    )
}