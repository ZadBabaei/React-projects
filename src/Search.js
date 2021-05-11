import Axios from "axios";
import getSearchApiURL from "./TmdbApi";

const search = (term, callBack) => {
  let TmdbResponse = 0;
  Axios.get(getSearchApiURL(term)).then((response) => {
    TmdbResponse = response.data.results;
    let result = TmdbResponse.map((item) => {
      const newobj = {
        label: item.original_title + " " + item.release_date,
        movieid: item.id + "",
        value: item.original_title + " " + item.release_date
      };
      return newobj;
    });
    callBack(result);
  }).catch((e) => {
  });
};



const apiKey = "10b0cac006c85b52e64463b5977f8b8c";
const baseUrl2 ="https://api.themoviedb.org/3/movie/"

export const getMovieDataById = (id, callback) => {
  // 1. make api call
  // 2. put response into callback
  Axios.get( 
    baseUrl2 +
    id+
    "?api_key=" +
    apiKey ).then((response) => {
    let movieIdResponse = response.data;
    // console.log("the mpvie id return",movieIdResponse)
    callback(movieIdResponse)
    }); 
}

export default search;
