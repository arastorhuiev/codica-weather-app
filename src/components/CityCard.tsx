import { Box, Button, Grid, Typography } from '@mui/material';
import { nanoid } from 'nanoid';
import { useMemo } from 'react';
import { useAppSelector } from '../store/hooks';

export function CityCard() {
  const citiesData = useAppSelector((state) => state.weatherCity.data);
  const dataStatus = useAppSelector((state) => state.weatherCity.status);

  const dataCompleted = useMemo(
    () =>
      citiesData.map((cityData) => (
        <Box
          key={nanoid()}
          sx={{
            width: 300,
            height: 300,
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
            <Typography variant='body2'>{cityData.main.temp}</Typography>
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

  return <Grid>{renderData()}</Grid>;
}
