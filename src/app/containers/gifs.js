import {connect} from 'react-redux';
import {searchGifs} from '../actions';
import SearchComponent from '../components/search';

const getGifs = (gifs, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return gifs;
    default:
      return gifs;
  }
};

const mapStateToProps = state => {
  return {
    gifs: getGifs(state.gifs, 'SHOW_ALL')
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSearchClick: query => {
      dispatch(searchGifs(query));
    }
  };
};

const Search = connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchComponent);

export default Search;
