import * as React from 'react';
import { Link } from '@mui/material';
import { Button, ButtonGroup, Box } from '@mui/material';

export default function Home() {
    return (
        <>
        <Box textAlign="center" my="100px" alignContent="center" >
            <ButtonGroup variant="contained" aria-label="primary button group">
                <Link href='login'><Button>Login</Button></Link>
                <Link href='register'><Button>Register</Button></Link>
                <Link href='myLibrary'><Button>My Library</Button></Link>
                <Link href='myStore'><Button>My Store</Button></Link>
            </ButtonGroup>
        </Box>
        </>
    );
}
