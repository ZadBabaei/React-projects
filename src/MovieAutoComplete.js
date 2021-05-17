import { AutoComplete } from "antd";
import React, { useState } from "react";
import search from "./Search";

function MovieAutoComplete(props) {
  const [options, setOptions] = useState([]);

  return (
    <div>
      <AutoComplete
        style={{ width: 200 }}
        options={options}
        placeholder="try to type `b`"
        onChange={(term) => {
          // console.log("this is in autocomplete",term);
          search(term, setOptions);
        }}
        onSelect={(e, t) => {
          props.onSelect(t.movieid);
        }}
      />
    </div>
  );
}

export default MovieAutoComplete;
