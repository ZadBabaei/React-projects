import './App.css';
import 'antd/dist/antd.css';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';
import { useState } from 'react';
import transparent_films from './Images/transparent_films.svg';

function SelectMovies() {
  const ImageWraper = styled.div`
    margin: 0;
    padding: 0;
    position: absolute;
    width: 50rem;
    top: 0rem;
    left: 0rem;
  `;

  const ButFimlImg = styled.img`
    margin: 0;
    padding: 0;
    position: absolute;
    width: 50rem;
    top: 0rem;
    left: 0rem;
  `;

  //   const Film = styled.img`
  //     margin: 0;
  //     padding: 0;
  //     position: absolute;
  //     top: 23rem;
  //     left: 12rem;
  //   `;
  const [selectedMovies, setSelectedMovies] = useState([]);
  return (
    <div>
      <ImageWraper>
        <ButFimlImg src={transparent_films} alt="ds" />
      </ImageWraper>
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

export default SelectMovies;
