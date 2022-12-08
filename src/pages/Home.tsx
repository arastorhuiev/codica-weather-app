import { CityCard } from '../components/CityCard';
import { Search } from '../components/Search';
import { Container, Stack } from '@mui/material';

export function Home() {
  return (
    <Container>
      <Stack spacing={2}>
        <Search />
        <CityCard />
      </Stack>
    </Container>
  );
}
