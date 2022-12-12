import { CityCard } from '../components/CityCard';
import { Search } from '../components/Search';
import { Container, Grid, Stack } from '@mui/material';
import { useAppSelector } from '../store/hooks';
import { useMemo } from 'react';
import { nanoid } from 'nanoid';

export function Home() {
  const citiesData = useAppSelector((state) => state.weatherCity.data);
  const dataStatus = useAppSelector((state) => state.weatherCity.status);

  const dataCompleted = useMemo(
    () =>
      citiesData.map((cityData) => (
        <CityCard key={nanoid()} cityData={cityData} />
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
