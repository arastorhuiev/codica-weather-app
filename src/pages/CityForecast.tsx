import { useEffect } from 'react';

import { useParams } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '../store/hooks';
import { fetchForecastByCityName } from '../store/forecast/forecastSlice';

import { Box, Button, Container, Stack, Typography } from '@mui/material';
import { ForecastBar } from '../components/ForecastBar';
import { Link } from 'react-router-dom';

export function CityForecast() {
  const dispatch = useAppDispatch();

  const cityData = useAppSelector((state) => state.forecast.data);

  const dataStatus = useAppSelector((state) => state.forecast.status);

  const params = useParams();
  const cityName = params.city;

  useEffect(() => {
    if (cityName) {
      dispatch(fetchForecastByCityName(cityName));
    }
  }, [dispatch]);

  return (
    cityData && (
      <Container>
        <Stack
          direction='column'
          justifyContent='center'
          alignItems='center'
          spacing={2}>
          <Box sx={{ mt: 2 }}>
            <Typography variant='h2'>{cityData.city.name}</Typography>
            {/* <Typography variant='h6'>
              Sunrise: {cityData.city.sunrise}
            </Typography>
            <Typography variant='h6'>Sunset: {cityData.city.sunset}</Typography>
            <Typography variant='h6'>
              Timezone: {cityData.city.timezone}
            </Typography> */}
          </Box>
          <Box>
            <ForecastBar forecastData={cityData.list} />
          </Box>
          <Link style={{ textDecoration: 'none' }} to='..'>
            <Button variant='outlined' type='button'>
              Go Back
            </Button>
          </Link>
        </Stack>
      </Container>
    )
  );
}
