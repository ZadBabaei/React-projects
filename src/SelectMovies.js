import './App.css';
import 'antd/dist/antd.css';
// import Button from '@material-ui/core/Button';
import styled from 'styled-components';
import { useState } from 'react';
import transparent_films from './Images/transparent_films.svg';
import gray_box from './Images/gray_box.svg';
import backArrow from './Images/backArrow.png';
import doneButt from './Images/doneButt.png';
import { Link } from 'react-router-dom';

function SelectMovies() {
  const ImageWraper = styled.div`
    margin: 0;
    padding: 0;
    position: absolute;
    width: 50rem;
    top: 0rem;
    left: 0rem;
  `;

  const ButFilmImg = styled.img`
    margin: 0;
    padding: 0;
    position: absolute;
    width: 50rem;
    top: 14rem;
    left: -20rem;
    z-index: -1;
  `;
  const EmptyImgBox = styled.img`
    margin: 0;
    padding: 0;
    width: 15rem;
  `;

  const GrayBox = styled.div`
    margin: 5rem;
    position: relative;
    padding: 0rem;
    display: flex;
    justify-content: center;
    gap: 1rem;
  `;
  const DoneButton = styled.div`
    margin: 0;
    padding: 0;
    position: absolute;
    top: 50rem;
    right: 13rem;
  `;
  const TopLineText = styled.div`
    margin: 2rem;
    padding: 0;
    display: inline-flex;
  `;
  const MovieTxt = styled.h1`
    position: relative;
    left: 1rem;
    font-size: 2rem;
    color: white;
  `;
  const ChoseTheMovies = styled.h1`
    margin: 10;
    padding: 0;

    display: flex;
    justify-content: center;
    // {font-family: 'Times New Roman';
    // position: absolute;
    // right: 33rem;
    font-size: 4rem;
    color: white;
  `;

  const [selectedMovies, setSelectedMovies] = useState([]);

  const [myBoolean, setMyBoolean] = useState(true);

  const getMovieComponents = () => {
    if (true) return [<h1>test</h1>];
  };

  return (
    <div>
      {[0, 1, 2, 3, 4, 5].map(i => {
        return <h2>{i}</h2>;
      })}
      {getMovieComponents([])}
      {myBoolean &&
        'HELLOOOOOO11111111111111111111111111111111111111111111111111111111111111111111'}
      <TopLineText>
        <img src={backArrow} alt="" />
        <Link to={''}>
          <MovieTxt>MOVIE NIGHT</MovieTxt>
        </Link>
      </TopLineText>
      <ChoseTheMovies Style="color:white;">
        Choose up to 6 movies below
      </ChoseTheMovies>
      <GrayBox>
        <EmptyImgBox src={gray_box} alt="box" />
        <EmptyImgBox src={gray_box} alt="box" />
        <EmptyImgBox src={gray_box} alt="box" />
        <EmptyImgBox src={gray_box} alt="box" />
        <EmptyImgBox src={gray_box} alt="box" />
        <EmptyImgBox src={gray_box} alt="box" />
      </GrayBox>
      <ImageWraper>
        <ButFilmImg src={transparent_films} alt="ds" />
      </ImageWraper>
      <div>
        <DoneButton>
          <Link to={'VotingLink'}>
            <img Style="width:10rem;" src={doneButt} alt="done" />
          </Link>
        </DoneButton>
        {/* <Button
          variant="contained"
          color="primary"
          onClick={e => {
            const newSelectedMovies = [...selectedMovies];
            newSelectedMovies.pop();
            setSelectedMovies(newSelectedMovies);
          }}
        >
          Undo
        </Button> */}
      </div>
    </div>
  );
}

export default SelectMovies;
