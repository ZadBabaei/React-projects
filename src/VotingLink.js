import styled from 'styled-components';
import { Link } from 'react-router-dom';
import doneButt from './Images/doneButt.png';
import backArrow from './Images/backArrow.png';

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
  return (
    <div>
      <TopLineText>
        <img src={backArrow} alt="back arrow " />
        <Link to="">
          <MovieTxt>MOVIE NIGHT</MovieTxt>
        </Link>
      </TopLineText>
    </div>
  );
}

export default VotingLink;
