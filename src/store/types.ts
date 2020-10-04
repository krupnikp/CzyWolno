export const GET_WEATHER = 'GET_WETHER';
export const SET_LOADING = 'SET_LOADING';
export const SET_ERROR = 'SET_ERROR';
export const SET_ALERT = 'SET_ALERT';

// export interface WeatherStation {
//   id: number;
//   stationName: string;
//   gegrLat: number;
//   gegrLon: number;
//   city: {
//     id: number;
//     name: string;
//     commune: {
//       communeName: string;
//       districtName: string;
//       provinceName: string;
//     }
//   }
//   addressStreet: boolean;
// }
export interface WeatherStation {
  id: number;
  stCalcDate: number;
  stIndexLevel: {
    id: number;
    indexLevelName: string;
  }
}
export interface WeatherError {
  message: string;
}
export interface WeatherState {
  data: WeatherStation | null;
  loading: boolean;
  error: string;
}


interface GetWeatherStation {
  type: typeof GET_WEATHER;
  payload: WeatherStation;
}
interface SetLoadingAction {
  type: typeof SET_LOADING;
}
interface SetErrorAction {
  type: typeof SET_ERROR;
  payload: string;
}

export type WeatherAction = GetWeatherStation | SetLoadingAction | SetErrorAction;