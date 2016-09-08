import * as utils from '../asyncUtils.js';
 
it('returns the proper action names for TEST_API on asyncActionNames', () => {
  expect(utils.asyncActionNames('TEST_API')).toMatchSnapshot();
});

it('builds a proper object for async actions on buildAsyncActions', () => {
  const TEST_API = utils.asyncActionNames('TEST_API');
  const receiveTestData = utils.buildAsyncActions(TEST_API);

  const data = [{id: 1, name: 'Fake'}];
  const error = new Error('Look ma, I am an error!');
  
  expect(receiveTestData.failure(error)).toMatchSnapshot();
  expect(receiveTestData.request()).toMatchSnapshot();
  expect(receiveTestData.success(data)).toMatchSnapshot();
});
