import { ActionType } from '../action-types';

interface Category {
    id: number;
    name: string;
    reqName: string;
}

interface SearchCategoriesAction {
  type: ActionType.SEARCH_CATEGORIES;
}

interface SearchCategoriesSuccessAction {
  type: ActionType.SEARCH_CATEGORIES_SUCCESS;
  payload: Category[];
}

interface SearchCategoriesErrorAction {
  type: ActionType.SEARCH_CATEGORIES_ERROR;
  payload: string;
}

export type Action =
  | SearchCategoriesAction
  | SearchCategoriesSuccessAction
  | SearchCategoriesErrorAction;