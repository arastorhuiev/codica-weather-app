import axios from 'axios';

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { Status } from '../types';
import { ForecastState } from './types';

const baseFetchForecastByCityName = async (city: string) => {
  const response = await axios.get(
    `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${process.env.REACT_APP_OPEN_WEATHER_API_KEY}`,
  );

  return response.data;
};

export const fetchForecastByCityName = createAsyncThunk(
  'forecast/fetchForecastByCityName',
  baseFetchForecastByCityName,
);

const initialState: ForecastState = {
  status: Status.LOADING,
  data: null,
};

const forecastSlice = createSlice({
  name: 'forecast',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchForecastByCityName.pending, (state) => {
      state.status = Status.LOADING;
    });
    builder.addCase(fetchForecastByCityName.fulfilled, (state, action) => {
      state.status = Status.SUCCESS;
      state.data = action.payload;
    });
    builder.addCase(fetchForecastByCityName.rejected, (state) => {
      state.status = Status.ERROR;
    });
  },
});

export const forecastReducer = forecastSlice.reducer;
