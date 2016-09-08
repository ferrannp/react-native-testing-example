import { LOAD_REPOS } from '../actions/api';
import { SELECT_REPO } from '../actions/repos';

export const initialState = { // Exporting it for test purposes
  error: null,
  isLoading: false,
  repos: null,
  selected: null,
};

export default function repos(state = initialState, action) {
  switch (action.type) {
    case LOAD_REPOS.failure:
      return {...state, error: action.error, isLoading: false};
    case LOAD_REPOS.request:
      return {...state, isLoading: true};
    case LOAD_REPOS.success:
      return {...state, isLoading: false, repos: action.data};
    case SELECT_REPO:
      const selected = state.selected !== action.id ? action.id : null;
      return {...state, selected};
    default:
      return state;
  }
}
