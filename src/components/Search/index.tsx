import React, { FC, FormEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setLoading, getWeather } from '../../store/weatherActions';

import { setAlert } from '../../store/alertAction';

import Button from "../../common/styledButton"

interface SearchProps {
  title: string;
}

const Search: FC<SearchProps> = ({ title }) => {
  const dispatch = useDispatch();
  const [cityID, setCity] = useState('');

  const changeHandler = (e: FormEvent<HTMLInputElement>) => {
    setCity(e.currentTarget.value);
  }

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (cityID.trim() === '') {
      return (
        dispatch(setAlert('City is required!')),
        console.log("City  is required!")
      )
    }

    dispatch(setLoading());
    dispatch(getWeather(cityID));
    setCity('');
  }

  return (
    <div>
      <div>
        <div>
          <h1>{title}</h1>
          <form onSubmit={submitHandler}>
            <input
              type="text"
              className="input has-text-centred mb-2"
              placeholder="Enter cityID name"
              style={{ maxWidth: 300 }}
              value={cityID}
              onChange={changeHandler}
            />
            <Button>Search</Button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Search;