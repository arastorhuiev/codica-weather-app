import { FC } from 'react';

import { useAppDispatch } from '../store/hooks';

import {
  reloadDataByCityName,
  removeDataByCityId,
} from '../store/weather/weatherSlice';

import { Link } from 'react-router-dom';

import { IWeather } from '../store/weather/types';

import { Box, Button, Grid, Typography } from '@mui/material';

type CityCardProps = {
  cityData: IWeather;
};

export const CityCard: FC<CityCardProps> = ({ cityData }) => {
  const dispatch = useAppDispatch();

  const handleClickByCityName = (city: string): void => {
    dispatch(reloadDataByCityName(city));
  };

  const handleRemoveCityById = (id: number): void => {
    dispatch(removeDataByCityId(id));
  };

  return (
    <Box
      sx={{
        width: 360,
        height: 200,
        margin: 1,
        backgroundColor: 'primary.dark',
        borderRadius: 10,
        '&:hover': {
          opacity: 0.9,
        },
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Box>
        <Typography variant='body2'>
          {cityData.name} - {cityData.weather[0].main} (
          {cityData.weather[0].description})
        </Typography>
        <Typography variant='body2'>
          Temperature: {cityData.main.temp}
        </Typography>
        <Typography variant='body2'>
          Pressure: {cityData.main.pressure}
        </Typography>
        <Typography variant='body2'>
          Humidity: {cityData.main.humidity}
        </Typography>
        <Typography variant='body2'>
          Speed wind: {cityData.wind.speed}
        </Typography>
      </Box>

      <Box
        sx={{
          width: 350,
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          p: 2,
        }}>
        <Button
          variant='contained'
          color='secondary'
          onClick={() => handleClickByCityName(cityData.name)}>
          Reload
        </Button>
        <Link
          style={{ textDecoration: 'none' }}
          to={`/forecast/${cityData.name}`}>
          <Button variant='contained' color='secondary'>
            Forecast
          </Button>
        </Link>
        <Button
          variant='contained'
          color='error'
          onClick={() => handleRemoveCityById(cityData.id)}>
          Delete
        </Button>
      </Box>
    </Box>
  );
};
