import { forecastData } from '../../mocks';
import { Status } from '../types';
import { forecastReducer, fetchForecastByCityName } from './forecastSlice';
import { ForecastState } from './types';

const initialState: ForecastState = {
  status: Status.LOADING,
  data: null,
};

describe('forecastSlice', () => {
  it.todo(
    'should change status with fetchForecastByCityName.pending action',
    () => {},
  );
  it.todo(
    'should fetch data with fetchForecastByCityName.fulfilled action',
    () => {
      const data = forecastData;

      //const state = forecastReducer(initialState, fetchForecastByCityName.fulfilled(data));
    },
  );
  it.todo(
    'should change status and error with fetchForecastByCityName.rejected action',
    () => {},
  );
});
