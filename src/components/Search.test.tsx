import { render, screen, fireEvent } from '@testing-library/react';
import * as reduxHooks from 'react-redux';
import * as actions from '../store/weather/weatherSlice';
import { Search } from './Search';

jest.mock('react-redux');

const mockedDispatch = jest.spyOn(reduxHooks, 'useDispatch');

describe('Search', () => {
  it('should create Search', () => {
    mockedDispatch.mockReturnValue(jest.fn());
    const view = render(<Search />);

    expect(view).toMatchSnapshot();
  });

  // it('should dispatch action', () => {
  //   const dispatch = jest.fn();
  //   mockedDispatch.mockReturnValue(dispatch);

  //   const mockedFetchByEnterKey = jest.spyOn(actions, 'fetchWeatherByCityName');

  //   render(<Search />);

  //   fireEvent.keyPress(screen.getByRole('textfield'));

  //   expect(dispatch).toHaveBeenCalledTimes(1);
  //   expect(mockedFetchByEnterKey).toHaveBeenCalled();
  // });
});
