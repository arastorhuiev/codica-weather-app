import axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Status, WeatherState } from './types';

export const fetchWeatherByCityName = createAsyncThunk(
  'weather/fetchWeatherByLatLng',
  async (city: string) => {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.REACT_APP_OPEN_WEATHER_API_KEY}`,
    );

    return response.data;
  },
);

const initialState: WeatherState = {
  status: Status.LOADING,
  data: null,
};

const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    setData(state, action) {
      state.data = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchWeatherByCityName.pending, (state) => {
      state.status = Status.LOADING;
      state.data = null;
    });
    builder.addCase(fetchWeatherByCityName.fulfilled, (state, action) => {
      state.data = action.payload;
      state.status = Status.SUCCESS;
    });
    builder.addCase(fetchWeatherByCityName.rejected, (state) => {
      state.status = Status.ERROR;
      state.data = null;
    });
  },
});

export const { setData } = weatherSlice.actions;
export const weatherReducer = weatherSlice.reducer;