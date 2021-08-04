import axios from 'axios';
import { Dispatch } from 'redux';
import { ActionTypeBanners } from '../action-types';
import { ActionBanners } from '../actions';

export const searchBanners = (name: string) => {
  return async (dispatch: Dispatch<ActionBanners>) => {
    dispatch({
      type: ActionTypeBanners.SEARCH_BANNERS,
    });

    try {
      const { data } = await axios.get(
        'http://localhost:8080/api/banners/search',
        {
          params: {
            name: name,
          },
        }
      );

      dispatch({
        type: ActionTypeBanners.SEARCH_BANNERS_SUCCESS,
        payload: data,
      });
    } catch (err) {
      dispatch({
        type: ActionTypeBanners.SEARCH_BANNERS_ERROR,
        payload: err.message,
      });
    }
  };
};