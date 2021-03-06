import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';

import { RootState } from './store/store';
import Alert from './components/Alert';
import Search from './components/Search/';
import Weather from './components/Weather';
import Geolocation from './components/Geolocation';
import MapOfPoland from './components/MapOfPoland/';

import { setAlert } from './store/alertAction';
import { setError } from './store/weatherActions';


const App: FC = () => {
  const dispatch = useDispatch();
  const weatherData = useSelector((state: RootState) => state.weather.data);
  const loading = useSelector((state: RootState) => state.weather.loading);
  const error = useSelector((state: RootState) => state.weather.error);
  const alertMsg = useSelector((state: RootState) => state.alert.message);
  
  return (
    <div className="has-text-centred">
      <MapOfPoland />
      <Geolocation />
      <Search title="Wpisz ID stacji" />
      {loading ? <h2 className="is-size-3 py-2">Loading...</h2> : weatherData && <Weather data={weatherData} />}
      
      {alertMsg && <Alert message={alertMsg} onClose={() => dispatch(setAlert(''))} />}
      {error && <Alert message={error} onClose={() => dispatch(setError())} />}
    </div>
  );
}

export default App;
