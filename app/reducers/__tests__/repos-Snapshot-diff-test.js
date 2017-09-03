import repos from '../repos';
import { initialState } from '../repos';
import { receiveRepos } from '../../actions/api';
import { repos as data } from '../../../config/jest/mockData';

it('compare with toMatchDiffSnapshot', () => {
  expect(
    initialState
  ).toMatchDiffSnapshot(
    repos(initialState, receiveRepos.success(data)),
    { contextLines: 0 }
  );
});

it('LOAD_REPOS_FAILURE with toMatchDiffSnapshot', () => {
  const error = new Error('Look ma! I am an error');
  expect(
    initialState
  ).toMatchDiffSnapshot(
    repos(initialState, receiveRepos.failure(error)),
    {
      aAnnotation: 'Initial state',
      bAnnotation: 'Failure state',
      contextLines: 0,
    }
  );
});