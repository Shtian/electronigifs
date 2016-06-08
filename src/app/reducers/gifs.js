const gifs = (state = [], action) => {
  switch (action.type) {
    case 'SEARCH_GIFS':
      console.log('OH MYYYY', state, action.query, action.type);
      return [
        ...state,
        action.query
      ];
    default:
      return state;
  }
};

export default gifs;
