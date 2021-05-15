import styled from"styled-components";




let imgBaseUrl="https://image.tmdb.org/t/p/w500"

const ImageText = styled.p`
color: palevioletred;
margin:10px;
`;
const Images = styled.img`
margin:10px;
`;


function Movie(props){
    
    return( <div>

            <Images src={imgBaseUrl+props.movie.backdrop_path} alt={props.movie.title}></Images>
            <ImageText>Movie title : {props.movie.title}</ImageText>
            <ImageText>Movie ID : {props.movie.id}</ImageText>
            <ImageText>Release_date  : {props.movie.release_date}</ImageText>

            </div>
        )
}

export default Movie;
