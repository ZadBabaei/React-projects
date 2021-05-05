

const apiKey = "10b0cac006c85b52e64463b5977f8b8c";
const baseUrl = "https://api.themoviedb.org/3/search/movie";

const getSearchApiURL=(term)=>{
    return  baseUrl +
          "?api_key=" +
          apiKey +
          "&language=en-US&page=1&query=" +
          term+
          "&include_adult=false";         
          
}

// const getSearchResult

export default getSearchApiURL;
export  {apiKey, baseUrl};