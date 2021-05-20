import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import movieTape from "./Images/movie tape.svg";

function WelcomePage() {
  const Navigation = styled.nav`
    display: flex;
    justify-content: space-around;
  `;

  return (
    <div>
      <img src={movieTape} alt="test" />
      <Navigation>
        <h1>welcome</h1>
        <Link to="/SelectMovies">
          <h1>select movies</h1>
        </Link>
      </Navigation>

    </div>
  );
}

export default WelcomePage;
