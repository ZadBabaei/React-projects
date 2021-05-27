import './App.css';
import 'antd/dist/antd.css';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';
import { useState } from 'react';
import transparent_films from './Images/transparent_films.svg';
import gray_box from './Images/gray_box.svg';

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
      <div>
        <h1>movie nights</h1>
      </div>
      <div>
        <img src={gray_box} alt="box" />
        <img src={gray_box} alt="box" />
        <img src={gray_box} alt="box" />
        <img src={gray_box} alt="box" />
        <img src={gray_box} alt="box" />
        <img src={gray_box} alt="box" />
      </div>
      <ImageWraper>
        <ButFimlImg src={transparent_films} alt="ds" />
      </ImageWraper>
      <div>
        <div>
          <Button variant="contained" color="primary">
            {' '}
            Vote{' '}
          </Button>
        </div>
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
