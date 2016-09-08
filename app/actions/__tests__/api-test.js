import mockStore from 'redux-mock-store';

import { fetchData } from '../api';
import { asyncActionNames, buildAsyncActions } from '../utils/asyncUtils';

const store = mockStore();
const TEST_API = asyncActionNames('TEST_API');
const receiveTestData = buildAsyncActions(TEST_API);

beforeEach(() => {
  store.clearActions();
});

it('should handle TEST_API_SUCCESS action', async () => {
  const response = '{"items": [{"id": 1}]}';
  fetch.mockResponseSuccess(response);
  await store.dispatch(fetchData('/test', receiveTestData));
  expect(store.getActions()).toMatchSnapshot();
});

it('should handle TEST_API_FAILURE action', async () => {
  const mockError = new Error('Look ma! I am an error.');
  fetch.mockResponseFailure(mockError);
  await store.dispatch(fetchData('/test', receiveTestData));
  expect(store.getActions()).toMatchSnapshot();
});