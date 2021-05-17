import React from "react";
import styled from 'styled-components';
import {Link} from "react-router-dom";


function WelcomePage() {
    const Navigation = styled.nav`
    display:flex;
    justify-content: space-around;
  `;
    return (

        <Navigation>
            <Link to="/WelcomePage">
                <h1>welcome</h1>
            </Link>
            <Link to="/SelectMovies">
                <h1>select movies</h1>
            </Link>
        </Navigation>
    );
  }
  
  export default WelcomePage;
  