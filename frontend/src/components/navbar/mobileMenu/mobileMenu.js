// Material UI
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';

import { useState, useEffect } from 'react';

export default function MobileMenu({ mobileOpen, setMobileOpen, children }) {

    const [container, setContainer] = useState(null);
    const drawerWidth = 300;

    useEffect(() => {
        const newContainer = window !== undefined ? () => window.document.body : undefined;
        setContainer(newContainer);
    }, []);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    return (
        <div onClick={handleDrawerToggle} className='Mobile-menu'>
            <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ mr: 2, ml: 2, display: { md: 'none' } }}
            >
                <MenuIcon sx={{ fontSize: 30 }} />
            </IconButton>

            <Drawer
                anchor="right"
                container={container}
                variant="temporary"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{
                    keepMounted: true, // Better open performance on mobile.
                }}
                sx={{
                    display: { md: 'block', lg: 'none' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                }}>

                {children}

            </Drawer>
        </div>
    )
}