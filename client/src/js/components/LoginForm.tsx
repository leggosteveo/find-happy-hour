import { TextField, Button, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";

function LoginForm() {
  return (
    <>
      <Typography className="section-title" component="h1" variant="h5">
        Sign in
      </Typography>
      <form className="" noValidate>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          autoComplete="email"
          autoFocus
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
          autoComplete="current-password"
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className=""
        >
          Sign In
        </Button>
        <Button component={NavLink} to="/login?login=register" className="">
          Don't have an account? Register
        </Button>
      </form>
    </>
  );
}

export default LoginForm;
