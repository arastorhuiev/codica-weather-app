import { useMemo } from 'react';

import { useAppSelector } from '../store/hooks';

import { Search } from '../components/Search';
import { CityCard } from '../components/CityCard';
import { Container, Grid, Stack } from '@mui/material';

export function Home() {
  const citiesData = useAppSelector((state) => state.weatherCity.data);
  const dataStatus = useAppSelector((state) => state.weatherCity.status);

  const dataCompleted = useMemo(
    () =>
      citiesData.map((cityData) => (
        <CityCard key={cityData.id * Math.random()} cityData={cityData} />
      )),
    [citiesData],
  );

  const renderData = () => {
    if (dataStatus === 'loading') {
      return <>loading</>;
    }

    if (dataStatus === 'error') {
      return <>error</>;
    }

    if (dataStatus === 'completed') {
      return dataCompleted;
    }
  };

  return (
    <Container>
      <Stack spacing={2}>
        <Search />
        <Grid container justifyContent='center'>
          {renderData()}
        </Grid>
      </Stack>
    </Container>
  );
}
