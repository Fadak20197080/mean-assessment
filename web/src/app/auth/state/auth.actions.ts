import { createAction, props } from '@ngrx/store';
import { User, LoginPayload } from '../../shared/models';

export const login = createAction(
  '[Auth] Login',
  props<{ user: LoginPayload }>()
);

export const loginSuccess = createAction(
  '[Auth] Login Success',
  props<{ token: string; user: User }>()
);

export const loginFailure = createAction(
  '[Auth] Login Failure',
  props<{ error: any }>()
);

export const logout = createAction('[Auth] Logout');
