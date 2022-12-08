import { Box, Button, Grid, Typography } from '@mui/material';
import { useAppSelector } from '../store/hooks';

export function CityCard() {
  const cityData = useAppSelector((state) => state.weatherCity.data);
  const dataStatus = useAppSelector((state) => state.weatherCity.status);

  return (
    cityData && (
      <Box
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
    )
  );
}
