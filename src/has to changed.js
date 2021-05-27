import './App.css';
import 'antd/dist/antd.css';
import Button from '@material-ui/core/Button';
import Hero from './Hero';
import MovieAutoComplete from './MovieAutoComplete';
import { getMovieDataById } from './Search';
import Movie from './Movie';
import { useState } from 'react';

function SelectMovies_old() {
  const [selectedMovies, setSelectedMovies] = useState([]);
  return (
    <div>
      <Hero />
      <div>
        <MovieAutoComplete
          onSelect={id => {
            console.log('selected:', id);
            getMovieDataById(id, movieData => {
              console.log("here's the movie data:", movieData);
              const newSelectedMovies = selectedMovies.concat([movieData]);
              setSelectedMovies(newSelectedMovies);
            });
          }}
        />
      </div>
      {selectedMovies.map(s => {
        return <Movie movie={s} key={s.id} />;
      })}
      <div>
        <Button variant="contained" color="primary">
          {' '}
          Vote{' '}
        </Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={e => {
            const newSelectedMovies = [...selectedMovies];
            newSelectedMovies.pop();
            setSelectedMovies(newSelectedMovies);
          }}
        >
          Undo
        </Button>
      </div>
    </div>
  );
}

export default SelectMovies_old;
