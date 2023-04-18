import React, { useState } from "react";
import {
    TextField,
    Button,
    Grid,
    Box,
    Container,
    Paper,
    Typography,
} from "@mui/material";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";


const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        // Register user logic here
    };

    const isFormValid = () => {
        // Check if form is valid
        if (!email || !password || !confirmPassword) {
            return false;
        }
        if (password.length < 8) {
            return false;
        }
        if (password !== confirmPassword) {
            return false;
        }
        return true;
    };

    return (
        <Box sx={{ flexGrow: 1 }}>
            <Container maxWidth="sm" sx={{ my: 4 }}>
                <Paper sx={{ p: 3 }}>
                    <Grid item xs={12}>
                        <Typography mb={2} textAlign="center" variant="h4">Register</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <form onSubmit={handleSubmit}>
                            <Grid container spacing={3}>
                                <Grid item xs={12}>
                                    <TextField
                                        type="email"
                                        label="Email"
                                        variant="outlined"
                                        fullWidth
                                        required
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        error={!/^\S+@\S+\.\S+$/.test(email)}
                                        helperText={!/^\S+@\S+\.\S+$/.test(email) ? "Invalid email" : ""}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        type="password"
                                        label="Password"
                                        variant="outlined"
                                        fullWidth
                                        required
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        error={password.length > 0 && password.length < 8}
                                        helperText={password.length > 0 && password.length < 8 ? "Password must be at least 8 characters" : ""}
                                    />
                                    <TextField
                                    sx={{ mt: 3 }}
                                        type="password"
                                        label="Confirm Password"
                                        variant="outlined"
                                        fullWidth
                                        required
                                        value={confirmPassword}
                                        onChange={(e) => setConfirmPassword(e.target.value)}
                                        error={confirmPassword.length > 0 && password !== confirmPassword}
                                        helperText={confirmPassword.length > 0 && password !== confirmPassword ? "Passwords do not match" : ""}
                                    />

                                    <Button
                                    sx={{ my: 2 }}
                                        fullWidth
                                        size="large"
                                        type="submit"
                                        variant="contained"
                                        color="primary"
                                        disabled={!isFormValid()}
                                        onClick={() => history.push("/login")}
                                    >
                                        Register
                                    </Button>
                                    <Button
                                        fullWidth
                                        size="large"
                                        variant="contained"
                                        onClick={() => history.push("/login")}
                                    >
                                        Cancel
                                    </Button>
                                </Grid>
                            </Grid>
                        </form>
                    </Grid>
                </Paper>
            </Container>
        </Box>
    );
};

export default Register;
