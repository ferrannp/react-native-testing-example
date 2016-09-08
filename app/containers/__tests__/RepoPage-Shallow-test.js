import {
  View,
  Text,
} from 'react-native';
import React from 'react';
import { shallow } from 'enzyme';

import { RepoPage, styles } from '../RepoPage';
import RepoList from '../../components/RepoList';
import { repos } from '../../../config/jest/mockData';

it('renders a RepoPage using Enzyme', () => {
  const _getComponent = (repos) => {
    return (
      <RepoPage
        getRepos={jest.fn()}
        repos={repos}
      />
    )
  };

  const expectedComponent = (dynamicPart) => {
    return (
      <View style={styles.container}>
        {dynamicPart}
      </View>
    )
  };

  let wrapper = shallow(_getComponent({isLoading: true, repos: []}));
  expect(wrapper.contains(expectedComponent(
    <Text style={styles.loading}>
      Loading...
    </Text>)
  )).toBe(true);

  wrapper = shallow(_getComponent({isLoading: false, repos: repos}));
  expect(wrapper.contains(expectedComponent(
    <RepoList
      repos={repos}
      selected={undefined}
      selectRepo={undefined}
    />)
  )).toBe(true);
});
