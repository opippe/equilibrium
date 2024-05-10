import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import { Typography } from '@mui/material';
import Button from '@mui/material/Button';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import HomeIcon from '@mui/icons-material/Home';
import LocalDiningIcon from '@mui/icons-material/LocalDining';

const pages = [
    <Link style={{ textDecoration: 'none', color: 'white', display: 'flex', alignItems: 'center' }} to="/">
        <HomeIcon fontSize='1.5rem' sx={{ marginRight: '.15rem' }}/>
        Home
    </Link>, 
    <Link style={{ textDecoration: 'none', color: 'white', display: 'flex', alignItems: 'center' }} to="/dieta">
        <LocalDiningIcon fontSize='1.5rem' sx={{ marginRight: '.15rem' }}/>
        Dieta
    </Link>, 
    <Link style={{ textDecoration: 'none', color: 'white', display: 'flex', alignItems: 'center' }} to="/treino">
        <FitnessCenterIcon fontSize='1.5rem' sx={{ marginRight: '.15rem' }}/>
        Treino
    </Link>
];

function Header() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <AppBar position="static" sx={{  marginBottom: '2rem' }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Typography id='logotext' fontWeight={700} color={"white"} sx={{  fontSize: '1.25rem' }} >
                        EquilibriUM
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'flex' } }} ml='10%'>
                        {pages.map((page) => (
                            <Button
                                key={page}
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                {page}
                            </Button>
                        ))}
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default Header;