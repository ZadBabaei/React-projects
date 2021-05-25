import Axios from 'axios';
import getSearchApiURL from './TmdbApi';

const search = (term, callBack) => {
  let TmdbResponse = 0;
  if (!term) {
    return;
  }

  Axios.get(getSearchApiURL(term))
    .then(response => {
      TmdbResponse = response.data.results;
      let result = TmdbResponse.map(item => {
        let d = new Date(item.release_date);
        let ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(d);
        return {
          label: item.original_title + ' (' + ye + ')',
          movieId: item.id + '',
          value: item.original_title + ' (' + ye + ')'
        };
      });
      callBack(result);
    })
    .catch(e => {
      console.log(e);
    });
};

const apiKey = '10b0cac006c85b52e64463b5977f8b8c';
const baseUrl2 = 'https://api.themoviedb.org/3/movie/';

export const getMovieDataById = (id, callback) => {
  // 1. make api call
  // 2. put response into callback
  Axios.get(baseUrl2 + id + '?api_key=' + apiKey).then(response => {
    let movieIdResponse = response.data;
    // console.log("the movie id return",movieIdResponse)
    callback(movieIdResponse);
  });
};

export default search;
