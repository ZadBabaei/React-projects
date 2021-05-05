import Axios from "axios";
import getSearchApiURL from "./TmdbApi";

const search = (term, callBack) => {
  // console.log("Term", term);
  let TmdbResponse = 0;
  Axios.get(getSearchApiURL(term)).then((response) => {
    TmdbResponse = response.data.results;
    // console.log("this is the tmdb response", TmdbResponse);
    let result = TmdbResponse.map((item) => {
      const newobj = {
        label: item.original_title + " " + item.release_date,
        value: item.id + "",
      };
      // console.log("this is the tmdb newobj", newobj);
      return newobj;
    });
    // console.log("this is tresult", result);
    callBack(result);
  }).catch((e) => {
    // console.log("this is a error", e);
  });
};

export const getMovieDataById = (id, callback) => {
  // 1. make api call
  // 2. put response into callback

  callback({
    id: id,
    name: "dark knight",
    year: "2012",
    imageURL: "url"
  })
}

export default search;
