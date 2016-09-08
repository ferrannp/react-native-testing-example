import { selectRepo } from '../repos';

it('creates a SELECT_REPO action', async () => {
  expect(selectRepo(1000)).toMatchSnapshot();
});