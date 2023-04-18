import React, { useState } from 'react';
import {
    Box,
    Button,
    Container,
    FormControl,
    FormHelperText,
    Grid,
    Paper,
    TextField,
    Typography,
} from '@mui/material';
import { useHistory } from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [validForm, setValidForm] = useState(false);
    const [showError, setShowError] = useState(false);
    //
    const history = useHistory();

    const validateForm = () => {
        const validEmail = /\S+@\S+\.\S+/.test(email);
        const validPassword = password !== '';
        setEmailError(!validEmail);
        setPasswordError(!validPassword);
        setValidForm(validEmail && validPassword);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (validForm) {
            if (email === "a@a.a" && password === "1234") {
                history.push("/mylibrary");
                setShowError(false);
            } else {
                setShowError(true);
            }
        } else {
            setShowError(true);
        }
    };
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Container maxWidth="sm" sx={{ my: 4 }}>
                <Paper sx={{ p: 3 }}>
                    <Typography variant="h4" component="h1" align="center" gutterBottom>
                        Login
                    </Typography>
                    <form onSubmit={handleSubmit}>
                        <Grid container spacing={3}>
                            <Grid item xs={12}>
                                <FormControl fullWidth error={emailError}>
                                    <TextField
                                        label="Email"
                                        value={email}
                                        onChange={(event) => setEmail(event.target.value)}
                                        onBlur={validateForm}
                                        required
                                    />
                                    {emailError && (
                                        <FormHelperText>Please enter a valid email address</FormHelperText>
                                    )}
                                </FormControl>
                            </Grid>
                            <Grid item xs={12}>
                                <FormControl fullWidth error={passwordError}>
                                    <TextField
                                        label="Password"
                                        type="password"
                                        value={password}
                                        onChange={(event) => setPassword(event.target.value)}
                                        onBlur={validateForm}
                                        required
                                    />
                                    {passwordError && (
                                        <FormHelperText>Please enter a password</FormHelperText>
                                    )}
                                </FormControl>
                            </Grid>
                            <Grid item xs={12}>
                                <Button
                                    fullWidth
                                    size="large"
                                    type="submit"
                                    variant="contained"
                                    color="primary"
                                    disabled={!validForm}
                                >Login</Button>
                                {showError && (
                                    <Typography color="error" sx={{ mt: 4 }}>
                                        Incorrect email or password
                                    </Typography>
                                )}
                            </Grid>
                            <Grid item xs={12}>
                                <Button variant="text" fullWidth onClick={() => history.push('/register')}>Register</Button>
                            </Grid>
                        </Grid>
                    </form>
                </Paper>
            </Container>
        </Box>
    );
};

export default Login;
