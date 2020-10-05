import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';

import { RootState } from './store/store';
import Search from './components/Search';
import Weather from './components/Weather';
import { setError } from './store/weatherActions'


const App: FC = () => {
  const dispatch = useDispatch();
  const weatherData = useSelector((state: RootState) => state.weather.data);
  const loading = useSelector((state: RootState) => state.weather.loading);
  const error = useSelector((state: RootState) => state.weather.error);
  
  return (
    <div className="has-text-centred">
      <Search title="ENTER city name" />
      {loading ? <h2 className="is-size-3 py-2">Loading...</h2> : weatherData && <Weather data={weatherData} />}
      
    </div>
  );
}

export default App;
