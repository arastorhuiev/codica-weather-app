import { useMemo } from 'react';

import { useAppSelector } from '../store/hooks';

import { Box, Button, Grid, Typography } from '@mui/material';

export function CityCard() {
  const citiesData = useAppSelector((state) => state.weatherCity.data);
  const dataStatus = useAppSelector((state) => state.weatherCity.status);

  const handleClickByCityName = (city: string): void => {
    console.log('hi');
  };

  const dataCompleted = useMemo(
    () =>
      citiesData.map((cityData) => (
        <Box
          key={cityData.id}
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
      )),
    [citiesData],
  );

  const renderData = () => {
    if (dataStatus === 'loading') {
      return <></>;
    }

    if (dataStatus === 'error') {
      return <></>;
    }

    if (dataStatus === 'completed') {
      return dataCompleted;
    }
  };

  return (
    <Grid container justifyContent='center'>
      {renderData()}
    </Grid>
  );
}
