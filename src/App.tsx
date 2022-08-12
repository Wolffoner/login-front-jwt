import LoginContext from '@/context/Login.context';
import { BrowserRouter } from 'react-router-dom';
import { LoggedUserEmpty } from '@/models/LoggedUser.types';
import { UserPrivateRoutes } from '@/routes/private/User.routes';
import { UserPublicRoutes } from '@/routes/public/User.routes';
import { Box, Container } from '@mui/material';

const App = () => {


  return (
    <BrowserRouter>
      <LoginContext.Provider value={LoggedUserEmpty}>
        <Box sx={{ display: 'flex', height: '100vh', flexDirection: 'column', width: '100vw' }} >
          <UserPublicRoutes />
          <UserPrivateRoutes />
        </Box>
      </LoginContext.Provider>
    </BrowserRouter >
  )
}

export default App
