import { Grid, Typography } from '@mui/material';
import logo from '../../images/logo.png'
import logoLogin from '../../images/logoLogin.png'
import styled from 'styled-components';


export const AuthLayout = ({ children }) => {

  return (
    <Grid
      container
      alignItems="center"
      justifyContent="center"
      sx={{ minHeight: '100vh', backgroundColor: 'oscuro.main', padding: 4 }}>

      <LogoLogin src={logoLogin} />
      
      <Grid
        item xs={12} md={5} lg={3}
        sx={{ backgroundColor: 'rgba(255,255,255,0.5)', padding: 3, borderRadius: 2, zIndex: 1 }}>

        <Grid
          container
          alignItems="center"
          justifyContent="center" >
          <img src={logo} style={{ width: '80px' }} />
          <Typography variant='h5'>SERVICIO TECNICO INTEGRAL</Typography>
        </Grid>
        
        {children}

      </Grid>
    </Grid>
  )
}

const LogoLogin = styled.img`
position:absolute;
width: 750px;
top:40%;
left:40%;
transform: translate(-50%, -50%);
filter: blur(30px);

`