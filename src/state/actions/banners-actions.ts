import { ActionTypeBanners } from '../action-types';

interface Banner {
    id: number;
    name: string;
    price: number;
    categoryId: number;
    content: string;
}

interface SearchBannersAction {
  type: ActionTypeBanners.SEARCH_BANNERS;
}

interface SearchBannersSuccessAction {
  type: ActionTypeBanners.SEARCH_BANNERS_SUCCESS;
  payload: Banner[];
}

interface SearchBannersErrorAction {
  type: ActionTypeBanners.SEARCH_BANNERS_ERROR;
  payload: string;
}

export type ActionBanners =
  | SearchBannersAction
  | SearchBannersSuccessAction
  | SearchBannersErrorAction;