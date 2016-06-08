import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {searchGifs} from '../actions';

let SearchGifs = ({dispatch}) => {
  let input;

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();
          if (!input.value.trim()) {
            return;
          }
          dispatch(searchGifs(input.value));
          input.value = '';
        }}
        >
        <input
          ref={query => {
            input = query;
          }}
          />
        <button type="submit">
          Search
        </button>
      </form>
    </div>
  );
};

SearchGifs.propTypes = {
  dispatch: PropTypes.func.isRequired
};
SearchGifs = connect()(SearchGifs);

export default SearchGifs;
