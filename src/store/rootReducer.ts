import { Action, combineReducers } from '@reduxjs/toolkit';
import { counterSlice } from './counter';

const combinedReducer = combineReducers({
  counter: counterSlice.reducer,
});

const LOGOUT = 'logout';

// implemented in root reducer
export const logout = () => ({ type: LOGOUT });

export const rootReducer = (
  state: ReturnType<typeof combinedReducer> | undefined,
  action: Action<any>,
) => {
  if (action.type === LOGOUT) {
    // eslint-disable-next-line no-param-reassign
    // state = {authentication: {lastLogin: state.authentication?.lastLogin, firstTime: false}} as any;
  }
  return combinedReducer(state, action);
};
