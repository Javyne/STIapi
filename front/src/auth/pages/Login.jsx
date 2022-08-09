import { Button, Grid, TextField, Link } from '@mui/material';
import { useEffect } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { useForm , useAuthStore} from '../../hooks';
import { AuthLayout } from '../layout/AuthLayout';
import Swal from 'sweetalert2';


const loginFormFields = {
  userName:'',
  password:'',
}

export const Login = () => {

  //* USEFORM
  const {userName, password, onInputChange} = useForm(loginFormFields);

  //* AUTENTICATION
  const {startLogin, errorMessage} = useAuthStore();

  const loginSubmit = (event) =>{
    event.preventDefault()
    startLogin({userName, password})
  }

  //*ALERT STATE

  const Toast = Swal.mixin({
    toast: true,
    position: 'center',
    showConfirmButton: true,
    timer: 3000,
  })
  


  useEffect(()=>{
    if(errorMessage!==undefined){
      Toast.fire({
        icon: 'error',
        title: errorMessage
      })
    }
  },[errorMessage])


  return (
    <AuthLayout>
      <form onSubmit={loginSubmit}>
        <Grid
          container
          alignItems="center"
          justifyContent="center" spacing={2} sx={{ mt: 3 }} >
          <Grid item xs={12} >
            <TextField
              type="text"
              fullWidth
              label="Nombre de usuario"
              variant="standard"
              name="userName"
              value={userName}
              onChange={onInputChange}
              required
            />
          </Grid>
          <Grid item xs={12} >
            <TextField
              type="password"
              fullWidth
              label="Contraseña"
              name="password"
              value={password}
              onChange={onInputChange}
              variant="standard"
              required
            />
            <Link
              component={RouterLink}
              to="/auth/restore"
              color='inherit'
              underline='none'
            >
              Restaurar contraseña
            </Link>
          </Grid>
          <Grid item>
            <Button
              type='submit'
              variant="contained"
            >
              Ingresar
            </Button>

          </Grid>
        </Grid>
      </form>
    </AuthLayout>



  )
}
