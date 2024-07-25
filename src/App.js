import React, { useState } from 'react';
import { Container, Box, Tab, Tabs } from '@mui/material';
import Main from './components/Main';
import Employees from './components/Employees';
import Profile from './components/Profile';

const App = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Container style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <Box sx={{ flexGrow: 1, overflow: 'auto', paddingBottom: '56px' }}>
        {value === 0 && <Main />}
        {value === 1 && <Employees />}
        {value === 2 && <Profile />}
      </Box>
      <Box
        sx={{
          width: '100%',
          position: 'fixed',
          bottom: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          bgcolor: 'background.paper',
          boxShadow: 3
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          variant="fullWidth"
          indicatorColor="primary"
          textColor="primary"
          centered
        >
          <Tab label="Главная" />
          <Tab label="Сотрудники" />
          <Tab label="Профиль" />
        </Tabs>
      </Box>
    </Container>
  );
};

export default App;
