let imgBaseUrl="https://image.tmdb.org/t/p/w500"

function Movie(props){
    
    return( <div>
            <img src={imgBaseUrl+props.movie.backdrop_path} alt={props.movie.title}></img>
            <p>Movie title : {props.movie.title}</p>
            <p>Movie ID : {props.movie.id}</p>
            <p>Release_date  : {props.movie.release_date}</p>
            </div>
        )
}

export default Movie;
