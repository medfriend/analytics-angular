import { createReducer, on } from '@ngrx/store';
import { setToken, clearToken } from './auth.actions';
import { AuthState, initialState } from './auth.state';

const _authReducer = createReducer(
  initialState,
  on(setToken, (state, { token }) => ({ ...state, token })),
  on(clearToken, (state) => ({ ...state, token: null }))
);

export function authReducer(state: AuthState | undefined, action: any) {
  return _authReducer(state, action);
}
