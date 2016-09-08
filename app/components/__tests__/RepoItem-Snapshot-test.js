import React from 'react';
import renderer from 'react-test-renderer';

import RepoItem from '../RepoItem';
import { repos } from '../../../config/jest/mockData';

it('renders a RepoItem using Snapshots', () => {
  expect(renderer.create(
    <RepoItem
      repo={repos[0]}
      selectRepo={jest.fn}
    />
  )).toMatchSnapshot();
});

it('renders a selected RepoItem using Snapshots', () => {
  expect(renderer.create(
    <RepoItem
      isSelected
      repo={repos[0]}
      selectRepo={jest.fn}
    />
  )).toMatchSnapshot();
});