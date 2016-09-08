import { asyncActionNames, buildAsyncActions } from './utils/asyncUtils.js';

// Constants
export const LOAD_REPOS = asyncActionNames('LOAD_REPOS');

// Actions
export const receiveRepos = buildAsyncActions(LOAD_REPOS);

// Async actions
export const fetchData = (endpoint, fetchAction) => async (dispatch) => {
    try {
      dispatch(fetchAction.request());
      const response = await fetch(endpoint);
      const responseJson = await response.json();
      dispatch(fetchAction.success(responseJson.items));
    } catch (error) {
      dispatch(fetchAction.failure(error));
    }
};
