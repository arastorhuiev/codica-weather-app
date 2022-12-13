import { weatherData } from '../../mocks';
import { Status } from '../types';
import { WeatherState } from './types';
import { removeDataByCityId, weatherReducer } from './weatherSlice';

describe('weatherSlice', () => {
  it('should return removed city by id "removeDataByCityId"', () => {
    const initialState: WeatherState = {
      status: Status.SUCCESS,
      statusReloadedCity: Status.SUCCESS,
      data: weatherData,
    };

    const action = { type: removeDataByCityId.type, payload: 2643743 };
    const result = weatherReducer(initialState, action);

    expect(result).toEqual({
      status: Status.SUCCESS,
      statusReloadedCity: Status.SUCCESS,
      data: [],
    });
  });
});
