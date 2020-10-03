export const GET_WEATHER = 'GET_WETHER';
// export const SET_ERROR = 'SET_ERROR';
// export const SET_ALERT = 'SET_ALERT';

export interface WeatherStation {
  id: number;
  stationName: string;
  gegrLat: number;
  gegrLon: number;
  city: {
    id: number;
    name: string;
    commune: {
      communeName: string;
      districtName: string;
      provinceName: string;
    }
  }
  addressStreet: boolean;
}
// export interface WeatherData {
// }
interface GetWeatherStation {
  type: typeof GET_WEATHER;
  payload: WeatherStation;
}

export type WeatherAction = GetWeatherStation;