
export const Card = (props) =>{
    const [adviceNumber, adviceDescription] = props
    return(
        <article className="Card">
            <section className="Card-Section-P">
                <h3>{adviceNumber}</h3>
                <p>{adviceDescription}</p>
            </section>
            <section className="Card-Section-Img">
                <figure>
                    <img src ='../assets/images/pattern-divider-desktop.svg' alt="divider-desktop" />
                    <img src = '../assets/images/pattern-divider-mobile.sgv'alt="divider-mobile"/>
                    <img src='../assets/images/icon-dice.svg' alt="icon-dado" />
                </figure>
            </section>
        </article>
    )
}