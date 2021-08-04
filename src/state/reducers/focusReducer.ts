import { ActionTypeFocus } from '../action-types';
import { ActionFocus } from '../actions';


interface FocusState {
  focus: string;
}

const initialState = {
  focus: 'Categories',
};

const reducer = (
  state: FocusState = initialState,
  action: ActionFocus
): FocusState => {
  switch (action.type) {
    case ActionTypeFocus.CHANGE_FOCUS:
      return { focus: action.payload };
    default:
      return state;
  }
};

export default reducer;