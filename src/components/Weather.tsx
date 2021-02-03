import React, { FC } from 'react';
import { WeatherQuality } from '../store/types';

interface WeatherProps {
  data: WeatherQuality;
}

const Weather: FC<WeatherProps> = ({ data }) => {
  return (
    <section>
      <div>
        <h1 style={{ marginBottom: 50 }}>{data.id}-{data.stIndexLevel.indexLevelName}</h1>
      </div>
    </section>
  )
}

export default Weather;