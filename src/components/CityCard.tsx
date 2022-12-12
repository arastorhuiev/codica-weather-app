import { FC } from 'react';

import { useAppDispatch } from '../store/hooks';

import {
  reloadDataByCityName,
  removeDataByCityId,
} from '../store/weather/weatherSlice';

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
        height: 300,
        margin: 1,
        backgroundColor: 'primary.dark',
        borderRadius: 10,
        '&:hover': {
          opacity: 0.9,
        },
      }}>
      <Grid
        container
        direction='column'
        justifyContent='center'
        alignItems='center'>
        <Typography variant='body2'>
          {cityData.name} - {cityData.weather[0].main}
        </Typography>
        {/* <Typography variant='body2'>{cityData.weather[0].main}</Typography> */}
        {/* <Typography variant='body2'>
          {cityData.weather[0].description}
        </Typography> */}
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
        <Button
          variant='contained'
          color='success'
          onClick={() => handleClickByCityName(cityData.name)}>
          Reload
        </Button>
        <Button
          variant='contained'
          color='success'
          onClick={() => handleRemoveCityById(cityData.id)}>
          Delete
        </Button>
        <Button
          variant='contained'
          color='success'
          onClick={() => console.log(123)}>
          Weather per hour
        </Button>
      </Grid>
    </Box>
  );
};
