import axios from 'axios';
import { Dispatch } from 'redux';
import { ActionType } from '../action-types';
import { Action } from '../actions';

export const searchCategories = (name: string) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.SEARCH_CATEGORIES,
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
        type: ActionType.SEARCH_CATEGORIES_SUCCESS,
        payload: data,
      });
    } catch (err) {
      dispatch({
        type: ActionType.SEARCH_CATEGORIES_ERROR,
        payload: err.message,
      });
    }
  };
};