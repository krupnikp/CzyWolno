import { ThunkAction } from 'redux-thunk'; 
import { WeatherAction, WeatherQuality, WeatherError, GET_WEATHER, SET_LOADING, SET_ERROR } from './types';
import { RootState } from './store';

export const getWether = (city: string): ThunkAction<void, RootState, null, WeatherAction> => {
  return async dispatch => {
    try {
      const res = await fetch(`http://api.gios.gov.pl/pjp-api/rest/aqindex/getIndex/${city}`);

      if (!res.ok) {
        const resData: WeatherError = await res.json();
        throw new Error(resData.message);
        console.log("fetch not ok");
      }

      const resData: WeatherQuality = await res.json();
      dispatch({
        type: GET_WEATHER,
        payload: resData
      });
    } catch (err) {
      dispatch({
        type: SET_ERROR,
        payload: err.message
      });
      console.log(err.message);
    }
  }
}
export const setLoading = (): WeatherAction => {
  return {
    type: SET_LOADING
  }
}
export const setError = (): WeatherAction => {
  return {
    type: SET_ERROR,
    payload: ''
  }
}