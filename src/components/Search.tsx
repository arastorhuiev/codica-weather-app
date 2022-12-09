import { useState } from 'react';
import { useAppDispatch } from '../store/hooks';
import { fetchWeatherByCityName } from '../store/weatherSlice';
import { Box, TextField } from '@mui/material';

export function Search() {
  const [currentCity, setCurrentCity] = useState<string>('');

  const dispatch = useAppDispatch();

  const handleChangeByValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentCity(event.target.value);
  };

  const fetchByEnterKey = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      dispatch(fetchWeatherByCityName(currentCity));
      setCurrentCity('');
    }
  };

  return (
    <Box>
      <TextField
        label='Enter city name'
        value={currentCity}
        onChange={handleChangeByValue}
        onKeyPress={fetchByEnterKey}
        variant='standard'
        fullWidth
      />
    </Box>
  );
}
