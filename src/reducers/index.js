import {
  SEARCH_MOVIES_REQUEST,
  SEARCH_MOVIES_SUCCESS,
  SEARCH_MOVIES_FAILURE
} from '../actions/index'

const reducer = (state, action) => {
  switch (action.type) {
    case SEARCH_MOVIES_REQUEST:
      console.log('SEARCH_MOVIES_REQUEST', state)
      return {
        ...state,
        loading: true,
        errorMessage: null
      }
    case SEARCH_MOVIES_SUCCESS:
      console.log('SEARCH_MOVIES_SUCCESS', state)
      return {
        ...state,
        loading: false,
        movies: action.payload
      }
    case SEARCH_MOVIES_FAILURE:
      return {
        ...state,
        loading: false,
        errorMessage: action.error
      }
    default:
      return state;
  }
}

export default reducer;