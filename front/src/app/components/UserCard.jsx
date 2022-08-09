import { Card, CardContent, Grid, Typography } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';

export const UserCard = ({ user }) => {
    return (
        <Grid item >
            <Card sx={{ minWidth: 275 }}>
                <CardContent>
                    <Typography variant="h5" align='center'>
                        {user.nombre}
                    </Typography>
                    <Grid container sx={{ mt: 3 }}>
                        <Grid item xs={8}>
                            <Typography >
                                Administrador:
                            </Typography>
                        </Grid>
                        <Grid item xs={4}>
                            {user.admin ? <CheckIcon color='success' /> : <CloseIcon color='error' />}
                        </Grid>
                        <Grid item xs={8}>
                            <Typography >
                                Tecnico:
                            </Typography>
                        </Grid>
                        <Grid item xs={4}>
                            {user.tecnico ? <CheckIcon color='success' /> : <CloseIcon color='error' />}
                        </Grid>
                        <Grid item xs={8}>
                            <Typography >
                                Activo:
                            </Typography>
                        </Grid>
                        <Grid item xs={4}>
                            {user.activo ? <CheckIcon color='success' /> : <CloseIcon color='error' />}
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </Grid>
    )
}
