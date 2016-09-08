/**
 * @param baseName action base name
 * @return {object} an object with the three async action names
 */
export const asyncActionNames = (baseName) => (
  {
    failure: `${baseName}_FAILURE`,
    request: `${baseName}_REQUEST`,
    success: `${baseName}_SUCCESS`,
  }
);

/**
 * @param actionName {object}
 * @return {object} the three async object actions
 */
export const buildAsyncActions = (actionName) => ({
  request: () => ({
    type: actionName.request,
  }),
  failure: (error) => ({
    type: actionName.failure,
    error
  }),
  success: (data) => ({
    type: actionName.success,
    data
  }),
});