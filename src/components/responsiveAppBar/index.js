import { useAuthenticator } from '@aws-amplify/ui-react';
import { AccountCircle } from '@mui/icons-material';
import MenuIcon from '@mui/icons-material/Menu';
import SavingsIcon from '@mui/icons-material/Savings';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Toolbar from '@mui/material/Toolbar';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import { Auth } from 'aws-amplify';
import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { APP_NAME, pages, settings } from '../../config';

function ResponsiveAppBar() {
    const { signOut, user } = useAuthenticator();
    const navigate = useNavigate();

    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleNavigateHome = () => {
        navigate('/');
    };

    const handleCloseNavMenu = (page = null) => {
        setAnchorElNav(null);
        if (page) {
            navigate(`/${page.toLowerCase()}`);
        }
    };

    const handleCloseUserMenu = (setting) => {
        setAnchorElUser(null);
        if (setting && setting.toLowerCase() === 'logout') {
            setTimeout(async () => {
                try {
                    await Auth.signOut();
                    window.location.href = '/';
                } catch (error) {
                    console.log('error signing out: ', error);
                }
            });
        } else if (setting) {
            navigate(`/${setting.toLowerCase()}`);
        }
    };

    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={() => handleCloseNavMenu()}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {pages.map((page) => (
                                <MenuItem key={page} onClick={() => handleCloseNavMenu(page)}>
                                    <Typography textAlign="center">{page}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <IconButton
                        size="large"
                        aria-label="logo"
                        aria-controls="logo-appbar"
                        onClick={handleNavigateHome}
                        color="inherit"
                        sx={{ display: { xs: 'flex', md: 'none' } }}
                    >
                        <SavingsIcon />
                        <Typography
                            variant="h5"
                            noWrap
                            href=""
                            sx={{
                                ml: 2,
                                mr: 2,
                                display: { xs: 'flex', md: 'none' },
                                flexGrow: 1,
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            {APP_NAME.toUpperCase()}
                        </Typography>
                    </IconButton>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        <IconButton
                            size="large"
                            aria-label="logo"
                            aria-controls="logo-appbar"
                            onClick={handleNavigateHome}
                            color="inherit"
                        >
                            <SavingsIcon />
                        </IconButton>
                        {pages.map((page) => (
                            <Button
                                key={page}
                                onClick={() => handleCloseNavMenu(page)}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                {page}
                            </Button>
                        ))}
                    </Box>

                    <Box>
                        <Button onClick={() => signOut()}>
                            Sign out
                        </Button>
                    </Box>

                    <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title="Open settings">
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenUserMenu}
                                color="inherit"
                            >
                                <AccountCircle />
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={() => handleCloseUserMenu(null)}
                        >
                            {settings.map((setting) => (
                                <MenuItem
                                    key={setting}
                                    onClick={() => handleCloseUserMenu(setting)}
                                >
                                    <Typography textAlign="center">{setting}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default ResponsiveAppBar;
