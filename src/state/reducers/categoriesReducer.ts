import { ActionTypeCategories } from '../action-types';
import { ActionCategories } from '../actions';

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
  action: ActionCategories
): CategoriesState => {
  switch (action.type) {
    case ActionTypeCategories.SEARCH_CATEGORIES:
      return { loading: true, error: null, data: [] };
    case ActionTypeCategories.SEARCH_CATEGORIES_SUCCESS:
      return { loading: false, error: null, data: action.payload };
    case ActionTypeCategories.SEARCH_CATEGORIES_ERROR:
      return { loading: false, error: action.payload, data: [] };
    default:
      return state;
  }
};

export default reducer;