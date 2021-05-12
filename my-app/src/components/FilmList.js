import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from 'react';
import FilmCard from './FilmCard';
import AddFavourite from './AddToFavourites';
import SearchBox from './SearchBox';

const FilmList = () => {
  const [films, setFilms] = useState ([]);
	const [searchValue, setSearchValue] = useState('');
  const [favourites, setFavourites] = useState ([]);

  const getFilmRequest = async () => {
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=ddfc933`;

    const response = await fetch(url);
    const responseJson = await response.json();

    if (responseJson.Search) {
			setFilms(responseJson.Search);
		}
  };

  const addFavouriteFilm = (film) => {
		const newFavouriteList = [...favourites, film];
		setFavourites(newFavouriteList);
	};

	useEffect(() => {
		getFilmRequest(searchValue);
	}, [searchValue]);

	return (
      <div>
        <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
        <div class='list'>
				  <FilmCard
            films={films} 
            favouriteComponent={AddFavourite} 
            handleFavouritesClick={addFavouriteFilm}
            />
			  </div>
      </div>
	);
};

export default FilmList;