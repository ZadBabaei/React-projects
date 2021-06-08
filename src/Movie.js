import styled from 'styled-components';

let imgBaseUrl = 'https://image.tmdb.org/t/p/w500';

const Images = styled.img`
  width: 15rem;
  height: 22rem;
  border: 6px solid;
  border-color: gray;
`;

function Movie(props) {
  return (
    <div>
      <Images
        src={imgBaseUrl + props.movie.backdrop_path}
        alt={props.movie.title}
      ></Images>
    </div>
  );
}

export default Movie;
