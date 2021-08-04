import { ActionTypeCategories } from '../action-types';

interface Category {
    id: number;
    name: string;
    reqName: string;
}

interface SearchCategoriesAction {
  type: ActionTypeCategories.SEARCH_CATEGORIES;
}

interface SearchCategoriesSuccessAction {
  type: ActionTypeCategories.SEARCH_CATEGORIES_SUCCESS;
  payload: Category[];
}

interface SearchCategoriesErrorAction {
  type: ActionTypeCategories.SEARCH_CATEGORIES_ERROR;
  payload: string;
}

export type ActionCategories =
  | SearchCategoriesAction
  | SearchCategoriesSuccessAction
  | SearchCategoriesErrorAction;