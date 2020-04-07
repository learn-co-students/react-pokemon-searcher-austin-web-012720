import React from 'react';

const Search = (props) => {
  return (
    <div className="ui search">
      <div className="ui icon input">
        <input className="prompt" onChange={props.onSearch} />
        <i className="search icon" />
      </div>
      Sort by:
      <select onChange={props.onSort}>
        <option value="id">id</option>
        <option value="hp">hp</option>
        <option value="name">name</option>
        <option value="nameReverse">nameReverse</option>
      </select>
    </div>
  );
};

export default Search;
