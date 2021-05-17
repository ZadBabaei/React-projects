import styled from 'styled-components';

let imgBaseUrl = 'https://image.tmdb.org/t/p/w500';

const ImageText = styled.p`
  color: blue;
  font-size: 15px;
  font-family: 'Times New Roman', Times, serif;
  margin: 10px;
`;
const ImageText2 = styled(ImageText)`
  font-size: 18px;
`;
const Images = styled.img`
  margin: 10px;
`;
const Wrapper = styled.section`
  margin: 10px;
  padding: 10px;
  width: 32.5%;
  background: #cce6ff;
`;

function Movie(props) {
  return (
    <div>
      <Images
        src={imgBaseUrl + props.movie.backdrop_path}
        alt={props.movie.title}
      ></Images>
      <Wrapper>
        <ImageText2>Movie title: {props.movie.title}</ImageText2>
        <ImageText>Movie ID: {props.movie.id}</ImageText>
        <ImageText>Release_date: {props.movie.release_date}</ImageText>
      </Wrapper>
    </div>
  );
}

export default Movie;
