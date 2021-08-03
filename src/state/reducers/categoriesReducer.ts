import { ActionType } from '../action-types';
import { Action } from '../actions';

interface Category {
    id: number;
    name: string;
    reqName: string;
}

interface CategoriesState {
  loading: boolean;
  error: string | null;
  data: Category[];
}

const initialState = {
  loading: false,
  error: null,
  data: [],
};

const reducer = (
  state: CategoriesState = initialState,
  action: Action
): CategoriesState => {
  switch (action.type) {
    case ActionType.SEARCH_CATEGORIES:
      return { loading: true, error: null, data: [] };
    case ActionType.SEARCH_CATEGORIES_SUCCESS:
      return { loading: false, error: null, data: action.payload };
    case ActionType.SEARCH_CATEGORIES_ERROR:
      return { loading: false, error: action.payload, data: [] };
    default:
      return state;
  }
};

export default reducer;