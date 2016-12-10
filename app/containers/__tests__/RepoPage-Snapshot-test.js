jest.mock('../../components/RepoList', () => 'RepoList');

import React from 'react';
import renderer from 'react-test-renderer';

import { RepoPage } from '../RepoPage';
import { repos } from '../../../config/jest/mockData';

it('renders a RepoPage using Snapshots', () => {
  
  const _getComponent = (props) => {
    return (
      renderer.create(
        <RepoPage
          repos={props}
          getRepos={jest.fn()}
        />
      )
    )
  };
  
  let component = _getComponent({ isLoading: true, repos: [] });
  expect(component).toMatchSnapshot();
  
  component = _getComponent({ isLoading: false, repos });
  expect(component).toMatchSnapshot();
});
