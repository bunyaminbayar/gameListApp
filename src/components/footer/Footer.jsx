import { useState, useContext } from 'react';
import { Link } from '@mui/material';
import { Button, Box, TextField, MenuItem } from '@mui/material';
import LanguageContext from '../../context/LanguageContext';

// Change language

const currencies = [
    {
        value: 'en',
        label: 'English',
    },
    {
        value: 'tr',
        label: 'Turkish',
    }
];

export default function Footer() {
    const [selectedLanguage, setSelectedLanguage] = useState('en');
    const { language, setLanguage } = useContext(LanguageContext);

    const handleChange = (event) => {
        setLanguage(event.target.value);
    };

    return (
        <Box
            component="form"
            textAlign="right"
            sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
        >
            <div>
                <TextField
                    id="outlined-select-currency"
                    select
                    value={language}
                    onChange={handleChange}
                >
                    {currencies.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>
            </div>
            <Link href='login'><Button>Login</Button></Link>
            <Link href='register'><Button>Register</Button></Link>
            <Link href='myLibrary'><Button>My Library</Button></Link>
            <Link href='myStore'><Button>My Store</Button></Link>
        </Box>
    );
}
