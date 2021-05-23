import React from 'react';
import styled from 'styled-components';
// import { Link } from 'react-router-dom';
import movieTape from './Images/movie tape.png';
import film from './Images/film.svg';

function WelcomePage() {
  const MovieTapeImg = styled.img`
    margin: 0;
    padding: 0;
    background: transparent;
    width: 90rem;
    height:60rem;
  `;
  const Film = styled.img`
    margin: 0;
    padding: 0;
    width: 85%;
  `;
  const Div2 = styled.div`
    display: flex;
    background: linear-gradient(
      180deg,
      rgba(52, 68, 88, 1) 0%,
      rgba(0, 0, 0, 1) 100%,
      rgba(0, 212, 255, 1) 100%
    );
    margin: 0;
    padding: 0;
  `;
  // const TextTop = styled.h1`

  //   color:red;
  //   font-size:120px;
  //   position:relative;
  //   top:400px;
  //   left:1600px;
  // `;

  return (
    <Div2>
      <MovieTapeImg src={movieTape} alt={'movie image'}></MovieTapeImg>
      <Film src={film} alt={'movie image'}></Film>
    </Div2>
  );
}

export default WelcomePage;
