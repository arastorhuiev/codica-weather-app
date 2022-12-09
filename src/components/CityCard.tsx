import { useMemo } from 'react';

import { useAppSelector } from '../store/hooks';
import { nanoid } from 'nanoid';

import { Box, Grid, Typography } from '@mui/material';

export function CityCard() {
  const citiesData = useAppSelector((state) => state.weatherCity.data);
  const dataStatus = useAppSelector((state) => state.weatherCity.status);

  const dataCompleted = useMemo(
    () =>
      citiesData.map((cityData) => (
        <Box
          key={nanoid()}
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

  return (
    <Grid container justifyContent='space-between'>
      {renderData()}
    </Grid>
  );
}
