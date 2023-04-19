import React, { useState, useContext } from 'react';
import { Box, Button, Container, FormControl, FormHelperText, Grid, Paper, TextField, Typography } from '@mui/material';
import { useHistory } from "react-router-dom";
import LanguageContext from '../../context/LanguageContext';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [validForm, setValidForm] = useState(false);
    const [showError, setShowError] = useState(false);
    // react dom history
    const history = useHistory();
    // Global Language
    const { language } = useContext(LanguageContext);

    // validate inputs password and email
    const validateForm = () => {
        const validEmail = /\S+@\S+\.\S+/.test(email);
        const validPassword = password !== '';
        setEmailError(!validEmail);
        setPasswordError(!validPassword);
        setValidForm(validEmail && validPassword);
    };

    // post form
    const handleSubmit = (event) => {
        event.preventDefault();
        if (validForm) {
            // if Email a@a.a and password 1234 tahst true match
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
                        {language === "en" ? "Login" : "Giriş Yap"}
                    </Typography>
                    <form onSubmit={handleSubmit}>
                        <Grid container spacing={3}>
                            <Grid item xs={12}>
                                <FormControl fullWidth error={emailError}>
                                    <TextField
                                        label={language === "en" ? "Email" : "E-posta"}
                                        value={email}
                                        onChange={(event) => setEmail(event.target.value)}
                                        onBlur={validateForm}
                                        required
                                    />
                                    {emailError && (
                                        <FormHelperText>{language === "en" ? "Please enter a valid email address" : "Lütfen geçerli bir E-posta adresi yazın"}</FormHelperText>
                                    )}
                                </FormControl>
                            </Grid>
                            <Grid item xs={12}>
                                <FormControl fullWidth error={passwordError}>
                                    <TextField
                                        label={language === "en" ? "Password" : "Şifre"}
                                        type="password"
                                        value={password}
                                        onChange={(event) => setPassword(event.target.value)}
                                        onBlur={validateForm}
                                        required
                                    />
                                    {passwordError && (
                                        <FormHelperText>{language === "en" ? "Please enter a password" : "Lütfen şifrenizi giriniz"}</FormHelperText>
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
                                >
                                    {language === "en" ? "Login" : "Giriş yap"}
                                </Button>
                                {showError && (
                                    <Typography color="error" sx={{ mt: 4 }}>
                                        {language === "en" ? "Incorrect email or password" : "E-posta veya şifre hatalı"}
                                    </Typography>
                                )}
                            </Grid>
                            <Grid item xs={12}>
                                <Button variant="text" fullWidth onClick={() => history.push('/register')}>{language === "en" ? "Register" : "Kayıt ol"}</Button>
                            </Grid>
                        </Grid>
                    </form>
                </Paper>
            </Container>
        </Box>
    );
};

export default Login;
