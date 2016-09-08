import {
  Text,
  //TouchableHighlight,
  View,
} from 'react-native';
import React from 'react';
import { shallow } from 'enzyme';

import RepoItem, { styles } from '../RepoItem';
import { repos } from '../../../config/jest/mockData';

const repo = repos[0];

/**
 * This won't work since the onPress function generated here is different than the original one
 * You need to find a workaround for this.
 */
// it('renders a RepoItem using Enzyme 0', () => {
//   const wrapper = shallow(
//     <RepoItem
//       repo={repo}
//       selectRepo={jest.fn}
//     />
//   );
//
//   const { description, name, stargazers_count } = repo;
//   expect(wrapper.contains(
//     <TouchableHighlight
//       onPress={() => {}}
//       underlayColor='#E0F2F1'
//     >
//       <View style={styles.item}>
//         <Text style={styles.title}>{name}</Text>
//         <Text style={styles.stars}>{`${stargazers_count} stars`}</Text>
//       </View>
//     </TouchableHighlight>
//   )).toBe(true);
// });

it('renders a RepoItem using Enzyme 1', () => {
  const wrapper = shallow(
    <RepoItem
      repo={repo}
      selectRepo={jest.fn}
    />
  );
  
  const { description, name, stargazers_count } = repo;
  expect(wrapper.contains(
    <View style={styles.item}>
      <Text style={styles.title}>{name}</Text>
      <Text style={styles.stars}>{`${stargazers_count} stars`}</Text>
    </View>
  )).toBe(true);
});

it('renders a RepoItem using Enzyme 2', () => {
  const wrapper = shallow(
    <RepoItem
      repo={repo}
      selectRepo={jest.fn}
    />
  );
  
  expect(wrapper.find({style: styles.item}).length).toBe(1);
  expect(wrapper.contains(<Text>{repo.description}</Text>)).toBe(false);
});

it('renders a selected RepoItem using Enzyme 1', () => {
  const wrapper = shallow(
    <RepoItem
      isSelected
      repo={repo}
      selectRepo={jest.fn}
    />
  );
  
  const { description, name, stargazers_count } = repo;
  expect(wrapper.contains(
    <View style={[styles.item, styles.selected]}>
      <Text style={styles.title}>{name}</Text>
      <Text style={styles.stars}>{`${stargazers_count} stars`}</Text>
      <Text>{description}</Text>
    </View>
  )).toBe(true);
});


it('renders a selected RepoItem using Enzyme 2', () => {
  const wrapper = shallow(
    <RepoItem
      isSelected
      repo={repo}
      selectRepo={jest.fn}
    />
  );
  
  expect(wrapper.find({style: [styles.item, styles.selected]}).length).toBe(1);
  expect(wrapper.contains(<Text>{repo.description}</Text>)).toBe(true);
});
