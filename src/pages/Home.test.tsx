import { render } from '@testing-library/react';
import * as reduxHooks from 'react-redux';
import { weatherData } from '../mocks';
import { Home } from './Home';

const citiesData = weatherData;

const mockedDataSelector = jest.spyOn(reduxHooks, 'useSelector');
describe('Home', () => {
  it('should create homepage with empty state', () => {
    mockedDataSelector.mockReturnValue([]);

    const view = render(<Home />);

    expect(view).toMatchSnapshot();
  });

  it('should create homepage with citiesData', () => {
    mockedDataSelector.mockReturnValue(citiesData);

    const view = render(<Home />);

    expect(view).toMatchSnapshot();
  });
});
