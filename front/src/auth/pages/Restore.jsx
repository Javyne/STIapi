import { Button, Grid, TextField, Link, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { AuthLayout } from '../layout/AuthLayout';

export const Restore = () => {
  return (
    <AuthLayout>
      <form>
        <Grid
          container
          alignItems="center"
          justifyContent="center" spacing={2} sx={{ mt: 3 }} >
          <Typography variant='subtitle1'>
            La contraseña debe contener:
            <ul>
              <li>Al menos 8 caracteres</li>
              <li>Al menos una letra MAYUSCULA</li>
              <li>Al menos un número {'(0 a 9)'}</li>
              <li>Al menos un caracter especial {'(!"#$%&//*-)'}</li>
            </ul>
          </Typography>
          <Grid item xs={12} >
            <TextField
              type="password"
              fullWidth
              label="Contraseña"
              variant="standard"
              required
            />
          </Grid>
          <Grid item xs={12} >
            <TextField
              type="password"
              fullWidth
              label="Repita Contraseña"
              variant="standard"
              required
            />
          </Grid>
          <Grid item >
            <Button
              type='submit'
              variant="contained"
            >
              Restaurar
            </Button>
          </Grid>
          <Grid item >
            <Link
              component={RouterLink}
              to="/auth/Login"
              underline='none'
              color='inherit'

            >
              Cancelar
            </Link>

          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  )
}
