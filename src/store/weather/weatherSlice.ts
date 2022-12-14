import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { Status } from '../types';
import { WeatherState } from './types';

const baseFetchDataByCityName = async function (city: string) {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.REACT_APP_OPEN_WEATHER_API_KEY}`,
  );

  const data = await response.json();

  return data;
};

export const fetchWeatherByCityName = createAsyncThunk(
  'weather/fetchWeatherByCityName',
  baseFetchDataByCityName,
);

export const reloadDataByCityName = createAsyncThunk(
  'weather/reloadDataByCityName',
  baseFetchDataByCityName,
);

const initialState: WeatherState = {
  status: Status.LOADING,
  statusReloadedCity: null,
  data: [],
};

const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    removeDataByCityId(state, action) {
      const cityId = action.payload;
      const filtered = state.data.filter((item) => item.id !== cityId);
      state.data = filtered;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchWeatherByCityName.pending, (state) => {
      state.status = Status.LOADING;
    });
    builder.addCase(fetchWeatherByCityName.fulfilled, (state, action) => {
      if (action.payload.cod === 200) {
        state.data.push(action.payload);
        state.status = Status.SUCCESS;
      }
      state.status = Status.SUCCESS;
    });
    builder.addCase(fetchWeatherByCityName.rejected, (state) => {
      
      state.status = Status.ERROR;
    });
    builder.addCase(reloadDataByCityName.pending, (state) => {
      state.status = Status.LOADING;
    });
    builder.addCase(reloadDataByCityName.fulfilled, (state, action) => {
      const cityName = action.payload.name;
      const cityData = action.payload;
      const cityIndex = state.data.findIndex((item) => item.name === cityName);
      state.data.splice(cityIndex, 1, cityData);
      state.status = Status.SUCCESS;
      state.statusReloadedCity = Status.SUCCESS;
    });
    builder.addCase(reloadDataByCityName.rejected, (state) => {
      state.status = Status.ERROR;
    });
  },
});

export const { removeDataByCityId } = weatherSlice.actions;
export const weatherReducer = weatherSlice.reducer;
