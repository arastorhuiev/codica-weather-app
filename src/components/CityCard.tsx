import { Box, Button, Grid, Typography } from '@mui/material';
import { useAppSelector } from '../store/hooks';

export function CityCard() {
  const cityData = useAppSelector((state) => state.weatherCity.data);

  return (
    <Box
      sx={{
        width: 300,
        height: 300,
        backgroundColor: 'primary.dark',
        borderRadius: 10,
        opacity: 0.9,
        '&:hover': {
          opacity: 0.8,
        },
      }}>
      <Grid
        container
        direction='column'
        justifyContent='center'
        alignItems='center'>
        <Typography variant='h6'>
          {cityData.name}
        </Typography>
        {/* <Typography>{cityData.main.temp}</Typography> */}
      </Grid>
    </Box>
  );
}
