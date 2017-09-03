import React from 'react';
import renderer from 'react-test-renderer';

import RepoItem from '../RepoItem';
import { repos } from '../../../config/jest/mockData';

it('checks a selected RepoItem', () => {
  expect(
    renderer.create(<RepoItem
      repo={repos[0]}
      selectRepo={jest.fn()}
    />)
  ).toMatchDiffSnapshot(
    renderer.create(<RepoItem
      isSelected
      repo={repos[0]}
      selectRepo={jest.fn()}
    />),
    {
      aAnnotation: 'Base item',
      bAnnotation: 'Selected item',
      contextLines: 0,
    }
  );
});
