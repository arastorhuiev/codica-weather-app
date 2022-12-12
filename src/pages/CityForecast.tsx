import { useEffect } from 'react';

import { useParams } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '../store/hooks';
import { fetchForecastByCityName } from '../store/forecast/forecastSlice';

import { Box, Container, Stack, Typography } from '@mui/material';
import { ForecastBar } from '../components/ForecastBar';

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
        <Stack spacing={2}>
          <Box>
            <Typography>{cityData.city.name}</Typography>
            <Typography>Sunrise: {cityData.city.population}</Typography>
            <Typography>Sunset: {cityData.city.sunset}</Typography>
            <Typography>Timezone: {cityData.city.timezone}</Typography>
          </Box>
          <Box>
            <ForecastBar forecastData={cityData.list}/>
          </Box>
        </Stack>
      </Container>
    )
  );
}
