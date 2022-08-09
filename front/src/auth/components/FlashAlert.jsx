import { Snackbar, Alert } from '@mui/material';

export const FlashAlert = ({open, severity, message}) => {
  return (
    <Snackbar
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      open={open}
      autoHideDuration={5000}
    >
      <Alert severity={severity}>{message}</Alert>
    </Snackbar>
  )
}
