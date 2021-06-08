import { AutoComplete } from 'antd';
import React, { useState } from 'react';
import 'antd/dist/antd.css';
import styled from 'styled-components';
import search from './Search';
import { Content } from 'antd/lib/layout/layout';

function MovieAutoComplete(props) {
  const SearchBoxHolder = styled.div`
    position: absolute;
    top: 12%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
  `;
  const [options, setOptions] = useState([]);

  return (
    <div>
      {/* <SearchBoxHolder> */}
      <AutoComplete
        layout={Content}
        style={{ width: 700 }}
        options={options}
        placeholder="try to type `b`"
        onChange={term => {
          // console.log("this is in autocomplete",term);
          search(term, setOptions);
        }}
        onSelect={(e, t) => {
          props.onSelect(t.movieId);
        }}
      />
      {/* </SearchBoxHolder> */}
    </div>
  );
}

export default MovieAutoComplete;
