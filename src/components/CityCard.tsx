import { Box, Button, Grid, Typography } from '@mui/material';
import { FC } from 'react';
import { IWeather } from '../store/types';

type CityCardProps = {
  cityData: IWeather;
};

export const CityCard: FC<CityCardProps> = ({ cityData }) => {
  const handleClickByCityName = (city: string): void => {
    console.log('hi');
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
        <Typography variant='body2'>{cityData.name}</Typography>
        <Typography variant='body2'>{cityData.weather[0].main}</Typography>
        <Typography variant='body2'>
          {cityData.weather[0].description}
        </Typography>
        <Typography variant='body2'>temp: {cityData.main.temp}</Typography>
        <Typography variant='body2'>
          pressure: {cityData.main.pressure}
        </Typography>
        <Typography variant='body2'>
          humidity: {cityData.main.humidity}
        </Typography>
        <Typography variant='body2'>
          speed wind: {cityData.wind.speed}
        </Typography>
        <Button
          variant='contained'
          color='success'
          onClick={() => handleClickByCityName(cityData.name)}>
          Reload
        </Button>
      </Grid>
    </Box>
  );
};
