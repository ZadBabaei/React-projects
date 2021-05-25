import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import movieTape from './Images/movie tape3.png';
import film from './Images/film.png';

function WelcomePage() {
  const MovieTapeImg = styled.img`
    margin: 0;
    padding: 0;
    background: transparent;
    width: 50rem;
    position: absolute;
    top: -5rem;
    left: -20rem;
  `;
  const Film = styled.img`
    margin: 0;
    padding: 0;
    position: absolute;
    top: 23rem;
    left: 12rem;
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
    color: white;
    font-size: 6rem;
    font-family:"TwCenMT";
    position: relative;
    top: 9rem;
    left: 51rem;
  `;
  const TextInside = styled.h1`
    color: white;
    font-size: 3.8rem;
    position: absolute;
    top:30.5rem;
    left:55rem;
  
  `;

  return (
    <Div2>

        <MovieTapeImg src={movieTape} alt={'movie image'}></MovieTapeImg>

        <TextTop>MOVIE NIGHT</TextTop>

        <Film src={film} alt={'movie image'}></Film>
        <Link to="/SelectMovies">
        <TextInside> CREATE NEW POLL</TextInside>
        </Link>

    </Div2>
  );
}

export default WelcomePage;
