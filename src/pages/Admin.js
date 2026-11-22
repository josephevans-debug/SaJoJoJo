import React from 'react';
import { AppBar, Toolbar, Typography, Drawer, List, ListItemButton, ListItemText } from '@mui/material';

function AdminTemplate() {
    return (
        <div className="AdminTemplate">
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6">
                        Admin Panel
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer variant="permanent">
                <List>
                    <ListItemButton>
                        <ListItemText primary="Categories" />
                    </ListItemButton>
                    <ListItemButton>
                        <ListItemText primary="Threads" />
                    </ListItemButton>
                    <ListItemButton>
                        <ListItemText primary="Users" />
                    </ListItemButton>
                </List>
            </Drawer>
            <main>
                {/* Main content goes here */}
            </main>
        </div>
    );
}

export default AdminTemplate;