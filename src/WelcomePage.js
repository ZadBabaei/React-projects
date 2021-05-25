import React from 'react';
import styled from 'styled-components';
// import { Link } from 'react-router-dom';
import movieTape from './Images/movie tape3.png';
import film from './Images/film.svg';

function WelcomePage() {
  const MovieTapeImg = styled.img`
    margin: 0;
    padding: 0;
    background: transparent;
    width: 80rem;
    height: 50rem;
    position: absolute;
    top: -5rem;
    left: -30rem;
  `;
  const Film = styled.img`
    margin: 0;
    padding: 0;
    position: absolute;
    top: 50%;
    left: 20%;
  `;
  const Div2 = styled.div`
    display: flex;
    // background: linear-gradient(
    //   180deg,
    //   rgba(52, 68, 88, 1) 0%,
    //   rgba(0, 0, 0, 1) 100%,
    //   rgba(0, 212, 255, 1) 100%
    );
    margin: 0;
    padding: 0;
  `;
  const TextTop = styled.h1`
    color: red;
    font-size: 7rem;
    position: relative;
    top: 10rem;
    left: 16rem;
  `;

  return (
    <Div2>
      <div>
        <MovieTapeImg src={movieTape} alt={'movie image'}></MovieTapeImg>
      </div>
      <div>
        <TextTop>movie nights</TextTop>
      </div>
      <div>
        <Film src={film} alt={'movie image'}></Film>
      </div>
    </Div2>
  );
}

export default WelcomePage;
