import { TextField, Button, Typography, Container } from '@mui/material';
import { NavLink } from "react-router-dom";

function RegistrationForm() {
  return (
    <>
      <Typography className="section-title" component="h1" variant="h5">
        Register
      </Typography>
      <form className="" noValidate>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="username"
          label="Username"
          name="username"
          autoComplete="username"
          autoFocus
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          autoComplete="email"
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="new-password"
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          name="password"
          label="Confirm Password"
          type="password"
          id="confirm-password"
          autoComplete="new-password"
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className=""
        >
          Register
        </Button>
        <Container maxWidth="xs" className="register-link-container">
          <Button component={NavLink} to="/login" className="">
          Already have an account? Login
        </Button>
        </Container>
      </form>
    </>
  );
}

export default RegistrationForm;
