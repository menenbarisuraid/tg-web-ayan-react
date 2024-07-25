import React, { useState } from 'react';
import { Container, Box, BottomNavigation, BottomNavigationAction } from '@mui/material';
import Main from './components/Main';
import Employees from './components/Employees';
import Profile from './components/Profile';

const App = () => {
  const [value, setValue] = useState(0);

  return (
    <Container>
      <Box mt={2}>
        {value === 0 && <Main />}
        {value === 1 && <Employees />}
        {value === 2 && <Profile />}
      </Box>
      <BottomNavigation
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        showLabels
      >
        <BottomNavigationAction label="Главная" />
        <BottomNavigationAction label="Сотрудники" />
        <BottomNavigationAction label="Профиль" />
      </BottomNavigation>
    </Container>
  );
};

export default App;
