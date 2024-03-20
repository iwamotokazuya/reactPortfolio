import { requestStates } from '../constants';

export const actionTypes = {
  initial: 'INITIAL',
  fetch: 'FETCHING',
  success: 'FETCH_SUCCESS',
  error: 'FETCH_ERROR'
};

export const tenkiReducer = (
  state, action
) => {
  switch(action.type) {
    case actionTypes.initial: {
    }
    case actionTypes.fetch: {
    }
    case actionTypes.success: {
    }
    case actionTypes.error: {
    }
    default: {
      throw new Error();
    }
  }
};