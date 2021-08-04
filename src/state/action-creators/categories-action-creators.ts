import axios from 'axios';
import { Dispatch } from 'redux';
import { ActionTypeCategories } from '../action-types';
import { ActionCategories } from '../actions';

export const searchCategories = (name: string) => {
  return async (dispatch: Dispatch<ActionCategories>) => {
    dispatch({
      type: ActionTypeCategories.SEARCH_CATEGORIES,
    });

    try {
      const { data } = await axios.get(
        'http://localhost:8080/api/categories/search',
        {
          params: {
            name: name,
          },
        }
      );

      dispatch({
        type: ActionTypeCategories.SEARCH_CATEGORIES_SUCCESS,
        payload: data,
      });
    } catch (err) {
      dispatch({
        type: ActionTypeCategories.SEARCH_CATEGORIES_ERROR,
        payload: err.message,
      });
    }
  };
};