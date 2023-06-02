import * as React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';

export default function TitleBar() {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    User Management
                </Typography>
            </Toolbar>
        </AppBar>
    );
}