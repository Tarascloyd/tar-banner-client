import { ActionTypeBanners } from '../action-types';
import { ActionBanners } from '../actions';

interface Banner {
    id: number;
    name: string;
    price: number;
    categoryId: number;
    content: string;
}

interface BannersState {
  loading: boolean;
  error: string | null;
  data: Banner[];
}

const initialState = {
  loading: false,
  error: null,
  data: [],
};

const reducer = (
  state: BannersState = initialState,
  action: ActionBanners
): BannersState => {
  switch (action.type) {
    case ActionTypeBanners.SEARCH_BANNERS:
      return { loading: true, error: null, data: [] };
    case ActionTypeBanners.SEARCH_BANNERS_SUCCESS:
      return { loading: false, error: null, data: action.payload };
    case ActionTypeBanners.SEARCH_BANNERS_ERROR:
      return { loading: false, error: action.payload, data: [] };
    default:
      return state;
  }
};

export default reducer;