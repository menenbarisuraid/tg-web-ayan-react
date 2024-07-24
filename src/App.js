import React, { useState } from 'react';
import { Container, AppBar, Tabs, Tab, Box } from '@mui/material';
import Main from './components/Main';
import Employees from './components/Employees';
import Profile from './components/Profile';

const App = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Container>
      <AppBar position="static" color="default">
        <Tabs value={value} onChange={handleChange} variant="fullWidth">
          <Tab label="Главная" />
          <Tab label="Сотрудники" />
          <Tab label="Профиль" />
        </Tabs>
      </AppBar>
      <Box mt={2}>
        {value === 0 && <Main />}
        {value === 1 && <Employees />}
        {value === 2 && <Profile />}
      </Box>
    </Container>
  );
};

export default App;
