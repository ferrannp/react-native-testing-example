import React from 'react';
import renderer from 'react-test-renderer';

import RepoList from '../RepoList';
import { repos } from '../../../config/jest/mockData';

it('renders a RepoList using Snapshots', () => {
  const component = renderer.create(
    <RepoList
      repos={repos}
      selectRepo={jest.fn()}
    />
  );
  expect(component).toMatchSnapshot();
});
