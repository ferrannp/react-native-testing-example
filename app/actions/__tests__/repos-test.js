import { selectRepo, SELECT_REPO } from '../repos';

it('creates a SELECT_REPO action', () => {
  // You do it
  expect(selectRepo(1000)).toEqual(
    {
      type: SELECT_REPO,
      id: 1000
    }
  );
  // Jest does it
  expect(selectRepo(1000)).toMatchSnapshot();
});