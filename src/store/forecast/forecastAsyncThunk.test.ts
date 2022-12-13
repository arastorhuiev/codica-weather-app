import { forecastState } from '../../mocks';
import { fetchForecastByCityName } from './forecastSlice';

describe('forecastSlice', () => {
  it.todo('should fetchForecastByCityName with resolved response', async () => {
    const mockState = forecastState;
    //const { data } = mockState;
    //const fetch = jest.fn(data);

    // fetch.mockResolvedValue({
    //   ok: true,
    //   json: () => Promise.resolve(),
    // });

    const dispatch = jest.fn();
    const thunk = fetchForecastByCityName('Poltava');

    // await thunk(dispatch, () => ({}));

    const { calls } = dispatch.mock;
    expect(calls).toHaveLength(2);

    const [start, end] = calls;

    expect(start[0].type).toBe('forecast/fetchForecastByCityName/pending');
    expect(end[0].type).toBe('forecast/fetchForecastByCityName/fulfilled');
    expect(end[0].payload).toBe(mockState);
  });
  it.todo('should fetchForecastByCityName with rejected response');
});
