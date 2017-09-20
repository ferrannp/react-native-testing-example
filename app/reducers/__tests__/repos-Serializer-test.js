import repos from '../repos';
import { initialState } from '../repos';
import { receiveRepos } from '../../actions/api';
import { repos as data } from '../../../config/jest/mockData';

expect.addSnapshotSerializer({
  test: (val) => {
    return val && val.id
  },
  print: (val) => {
    return `[${val.id}] ${
      val.name}, Description: ${
      val.description}, Stars: ${
      val.stargazers_count}`;
  }
});

it('uses a custom serializer', () => {
  expect(repos(initialState, receiveRepos.success(data))).toMatchSnapshot();
});
