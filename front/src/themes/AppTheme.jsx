
import { ThemeProvider } from '@emotion/react';
import { defaultTheme } from './';
import { CssBaseline } from '@mui/material';

export const AppTheme = ({ children }) => {
    return (

        <ThemeProvider theme={defaultTheme}>
            <CssBaseline />
            {children}
        </ThemeProvider>

    )
}
