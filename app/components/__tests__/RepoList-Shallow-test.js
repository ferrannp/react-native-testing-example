import {
  ListView,
  Text,
} from 'react-native';
import React from 'react';
import { shallow } from 'enzyme';

import RepoList from '../RepoList';
import { repos } from '../../../config/jest/mockData';

it('renders a RepoList using Enzyme', () => {
  const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1.id !== r2.id});
  const dataSource = ds.cloneWithRows(repos);
  
  const wrapper = shallow(
    <RepoList
      repos={repos}
      selectRepo={jest.fn()}
    />
  );
  
  expect(wrapper.contains(
    <ListView
      dataSource={dataSource}
      renderRow={() => {}}
    />
  ))
  
});
