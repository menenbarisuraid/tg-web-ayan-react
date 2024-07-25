import React, { useState } from 'react';
import { Container, Box, BottomNavigation, BottomNavigationAction } from '@mui/material';
import Main from './components/Main';
import Employees from './components/Employees';
import Profile from './components/Profile';
import HomeIcon from '@mui/icons-material/Home';
import PeopleIcon from '@mui/icons-material/People';
import PersonIcon from '@mui/icons-material/Person';

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
        <BottomNavigationAction label="Главная" icon={<HomeIcon />} />
        <BottomNavigationAction label="Сотрудники" icon={<PeopleIcon />} />
        <BottomNavigationAction label="Профиль" icon={<PersonIcon />} />
      </BottomNavigation>
    </Container>
  );
};

export default App;
