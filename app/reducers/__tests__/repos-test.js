import repos from '../repos';
import { initialState } from '../repos';
import { receiveRepos } from '../../actions/api';
import { selectRepo } from '../../actions/repos';
import { repos as data } from '../../../config/jest/mockData';
 
it('returns the same state on an unhandled action', () => {
  expect(repos(initialState, {type: '_NULL'})).toMatchSnapshot();
});

it('handles LOAD_REPOS_FAILURE action', () => {
  const error = new Error('Look ma! I am an error');
  expect(repos(initialState, receiveRepos.failure(error))).toMatchSnapshot();
});

it('handles LOAD_REPOS_REQUEST action', () => {
  expect(repos(initialState, receiveRepos.request())).toMatchSnapshot();
});

it('handles LOAD_REPOS_SUCCESS action', () => {
  // Damn, it feels I'm rewriting the reducer again
  expect(repos(initialState, receiveRepos.success(data))).toEqual({
    error: null,
    isLoading: false,
    repos: data,
    selected: null,
  });
  // A bit better... (still rewriting the reducer behavior)
  expect(repos(initialState, receiveRepos.success(data))).toEqual({
    ...initialState,
    repos: data
  });
  // BOOM. If we change that specific reducer case, we'll compare the Snapshot results
  // and update them if the change is expected.
  expect(repos(initialState, receiveRepos.success(data))).toMatchSnapshot();
});

it('handles SELECT_REPO action', () => {
  const newState = repos(initialState, selectRepo(1));
  expect(newState).toMatchSnapshot();
  // Sending the same id should clean it
  expect(repos(newState, selectRepo(1))).toMatchSnapshot();
});