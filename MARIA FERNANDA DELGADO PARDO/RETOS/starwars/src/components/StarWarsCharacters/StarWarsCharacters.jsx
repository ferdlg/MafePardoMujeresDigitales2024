import React, { useState, useEffect } from 'react';
import './StarWarsCharacter.css';
import Pagination from '../Pagination/Pagination';
import Loader from '../Loader/Loader'; // Importamos el componente de Loader

function StarWarsCharacters() {
    const [characters, setCharacters] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [currentPage, setCurrentPage] = useState('https://swapi.dev/api/people/');
    const [timeoutId, setTimeOutId] = useState(null);
    const [nextPage, setNextPage] = useState(null);
    const [searchTerm, setSearchTerm]  = useState('');
    const [prevPage, setPrevPage] = useState(null);
    const [isFetching, setIsFetching] = useState(false);
    const [pageVisited, setPageVisited] = useState([]);

    const fetchCharacters = async (pageUrl, reset = false) => {
        try {
            setLoading(true); // Activar el loader antes de hacer la solicitud
            const response = await fetch(pageUrl);
            const data = await response.json();
            setCharacters((prevCharacters)=> reset ? data.results : [...prevCharacters, ...data.results]);
            setPageVisited([...pageVisited, data.next])
            if(pageVisited.length === 0){
                setNextPage(data.next);
                setPageVisited([...pageVisited, data.next])
            }
            setNextPage(data.next);
        } catch (err) {
            setError(err);
        } finally {
            setLoading(false); // Desactivar el loader cuando los datos se carguen
        }
    };

    useEffect(() => {
        fetchCharacters(currentPage, true);
    }, [currentPage]);

    useEffect(()=>{
        const handleScroll = () => {
            if (window.innerHeight + document.documentElement.scrollTop > document.documentElement.offsetHeight - 100 && nextPage && !isFetching )
                setIsFetching(true);
        };
    },[nextPage, isFetching])

    // const handlePrevious = () => {
    //     if (prevPage) {
    //         setCurrentPage(prevPage);
    //     }
    // };

    // const handleNext = () => {
    //     if (nextPage) {
    //         setCurrentPage(nextPage);
    //     }
    // };

    if (loading) {
        return <Loader />; // Mostrar el loader mientras se cargan los datos
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    const getCharacterImage = (url) => {
        const id = url.split("/").filter(Boolean).pop();
        return `https://starwars-visualguide.com/assets/img/characters/${id}.jpg`;
    };

    const handleSearch = (e) => {
        const searchValue = e.target.value;
        setSearchTerm(searchValue);

        if (timeoutId){
            clearTimeout(timeoutId)
        }

        const newTimeOutId = setTimeOutId(()=>{
            searchCharacter(searchValue);
        }, 500);

        setTimeOutId(newTimeOutId);
    }

    const searchCharacter = async(character) =>{
        return fetch(`https://swapi.dev/api/people/?search=${character}`)
                .then((response) => (response.json()))
                .then(data => {
                    setCharacters(data.results);
                    setNextPage(null);
                } )
                .catch((err)=>{
                    setError(err);
                });
    };

    if( loading && characters.length ===0){
        return <Loader />
    }

    return (
        <div className="characters-container">
            <h1 className="title">Star Wars Characters</h1>
            <div>
                <input
                type='text'
                name='personaje' 
                placeholder='Busquemos tu personaje'
                value={searchTerm} 
                onChange={handleSearch}></input>
            </div>
            <div className="character-list">
                {characters.map((character, index) => (
                    <div key={index} className="character-card">
                        <img
                            src={getCharacterImage(character.url)}
                            alt={character.name}
                            className="character-image"
                            onError={(e) => e.target.src = "https://starwars-visualguide.com/assets/img/placeholder.jpg"}
                        />
                        <div className="character-info">
                            <h2>{character.name}</h2>
                            <p><strong>Height:</strong> {character.height} cm</p>
                            <p><strong>Gender:</strong> {character.gender}</p>
                            <p><strong>Birth Year:</strong> {character.birth_year}</p>
                            <p><strong>Eye Color:</strong> {character.eye_color}</p>
                        </div>
                    </div>
                ))}
            </div>
            <Pagination handlePrevious={handlePrevious} handleNext={handleNext} prevPage={prevPage} nextPage={nextPage} />
        </div>
    );
}

export default StarWarsCharacters;
