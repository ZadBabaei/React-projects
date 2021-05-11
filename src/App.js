import "./App.css";
import "antd/dist/antd.css";
import Button from "@material-ui/core/Button";
import Hero from "./Hero";
import MovieAutoComplete from "./MovieAutoComplete";
import { getMovieDataById } from './Search';
import { useState } from 'react';
import Movie from "./Movie";

function App() {
  const [selectedMovies,setSelectedMovies]=useState([]);
  return (
    <div>
      <Hero />
      <div>
        <MovieAutoComplete
          onSelect={(id) => {
            console.log("selected:", id);
            getMovieDataById(id, (movieData) => {
              console.log("here's the movie data:", movieData)
              const newSelectedMovies= selectedMovies.concat([movieData]);
              setSelectedMovies(newSelectedMovies);
            })
            
          }}
        />
      </div>
      {
        selectedMovies.map((s) => {
          // return <h1>{s.name}</h1>
          return <Movie id={s.id} name={s.title} year={s.release_date}  key={s.id}/>
        })
      }
      <div>
        <Button variant="contained" color="primary">
          {" "}
          Vote{" "}
        </Button>
        <Button variant="contained" color="secondary" onClick={(e) => {
          const newSelectedMovies = [...selectedMovies];
          delete newSelectedMovies[newSelectedMovies.length-1];
          setSelectedMovies(newSelectedMovies);
        }}>
          Undo
        </Button>
      </div>
    </div>
  );
}

export default App;
