import { Box, TextField } from '@mui/material';
import { useState } from 'react';
import { useAppDispatch } from '../store/hooks';
import { fetchWeatherByCityName } from '../store/weatherSlice';

export function Search() {
  const [currentCity, setCurrentCity] = useState<string>('');

  const dispatch = useAppDispatch();

  const handleChangeByValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentCity(event.target.value);
  };

  const dispatchByEnterKey = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      dispatch(fetchWeatherByCityName(currentCity));
    }
  };

  return (
    <Box>
      <TextField
        label='Enter city name'
        value={currentCity}
        onChange={handleChangeByValue}
        onKeyPress={dispatchByEnterKey}
        variant='standard'
        fullWidth
      />
    </Box>
  );
}
