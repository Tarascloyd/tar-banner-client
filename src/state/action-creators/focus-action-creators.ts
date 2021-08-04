import { Dispatch } from 'redux';
import { ActionTypeFocus } from '../action-types';
import { ActionFocus } from '../actions';

export const changeFocus = (focus: string) => {
  return (dispatch: Dispatch<ActionFocus>) => {
    dispatch({
      type: ActionTypeFocus.CHANGE_FOCUS,
      payload: focus,
    });
  };
};