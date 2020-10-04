import React, { FC } from 'react';
import { WeatherStation } from '../store/types'

interface WeatherProps {
  data: WeatherStation;
}

const Weather: FC<WeatherProps> = ({ data }) => {
  return (
    <section className="section">
      <div className="conteiner">
        <h1 className="title has-text-centred" style={{ marginBottom: 50 }}>{data.id}</h1>
      </div>
    </section>
  )
}

export default Weather;