// Constants
export const SELECT_REPO = 'SELECT_REPO';

// Actions
export const selectRepo = (id) => {
  return {
    type: SELECT_REPO,
    id
  }
};
