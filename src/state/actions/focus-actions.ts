import { ActionTypeFocus } from '../action-types';

interface ChangeFocusAction {
  type: ActionTypeFocus.CHANGE_FOCUS;
  payload: string;
}

export type ActionFocus =
  | ChangeFocusAction;