import LoginContext from '@/context/Login.context';
import { LoggedUser, loggedUserEmpty } from '@/models/LoggedUser.types';
import { UserPublicRoutes } from '@/routes/public/User.routes';
import { Box } from '@mui/material';
import { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';

const App = () => {

  const [loggedUser, setLoggedUser] = useState<LoggedUser>(loggedUserEmpty);

  const handleLogin = (user: LoggedUser) => {
    setLoggedUser(user);
  }

  return (
    <LoginContext.Provider value={{ loggedUser, handleLogin }}>
      <Box sx={{ display: 'flex', height: '100vh', flexDirection: 'column', width: '100vw' }} >
        <BrowserRouter>
          <UserPublicRoutes />
        </BrowserRouter>
      </Box>
    </LoginContext.Provider>
  )
}

export default App
