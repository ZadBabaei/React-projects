import styled from 'styled-components';
import { Link } from 'react-router-dom';
import bladeShapelable from './Images/bladeShapelable.png';
import backArrow from './Images/backArrow.png';
import copyButt from './Images/copyButt.png';
import transparent_films from './Images/transparent_films.svg';

function VotingLink() {
  const MovieTxt = styled.h1`
    position: relative;
    left: 1rem;
    font-size: 2rem;
    color: white;
  `;
  const TopLineText = styled.div`
    margin: 2rem;
    padding: 0;
    display: inline-flex;
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
  const ImageWraper = styled.div`
    margin: 0;
    padding: 0;
    position: absolute;
    width: 50rem;
    top: 0rem;
    left: 0rem;
  `;
  const YourVotinTxt = styled.h1`
    margin: 10;
    padding: 0;
    position: relative;
    top: 3rem;
    left: 45rem;

    font-size: 4rem;
    color: white;
  `;
  const BladeShapeLable = styled.img`
    position: absolute;
    width: 40rem;
    display: block;
    left: 40rem;
    top: 20rem;
  `;
  const LinkText = styled.div`
    font-size: 2.5rem;
    position: relative;
    left: 49.5rem;
    top: 8rem;
  `;

  const CopyButt = styled.img`
    width: 12rem;
    position: relative;
    left: 53.5rem;
    top: 15rem;
  `;

  return (
    <div>
      <TopLineText>
        <img src={backArrow} alt="back arrow " />
        <Link to="">
          <MovieTxt>MOVIE NIGHT</MovieTxt>
        </Link>
      </TopLineText>
      <ImageWraper>
        <ButFilmImg src={transparent_films} alt="ds" />
      </ImageWraper>
      <YourVotinTxt Style="color:white;">Your voting link:</YourVotinTxt>
      <BladeShapeLable src={bladeShapelable} alt="" />
      <LinkText>
        <h1 Style="color:white">
          https://<br></br>zadbabaei.github.io/<br></br>MovieNights/
        </h1>
      </LinkText>

      <CopyButt src={copyButt} alt="copy button" />
    </div>
  );
}

export default VotingLink;
