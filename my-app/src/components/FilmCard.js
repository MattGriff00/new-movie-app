import React from 'react';
import { Card, CardImg } from 'reactstrap';

const FilmCard = (props) => {
    const FavouriteComponent = props.favouriteComponent;

    return (
    <>
        {props.films.map((film, index) =>(
            <div onClick={() => props.handleFavouritesClick(film)} className='image-container'>
                <Card>
                    <CardImg src={film.Poster} alt={film.Title} />
                    <div className='overlay'>
						<FavouriteComponent />  
					</div>
                </Card>                
            </div>
        ))}
    </>
)}

export default FilmCard;