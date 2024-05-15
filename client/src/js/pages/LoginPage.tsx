import React from "react";
import { Container } from "@mui/material";
import LoginForm from "../components/LoginForm";
import { useLocation } from "react-router-dom";
import RegistrationForm from "../components/RegistrationForm";

function useQuery() {
  const { search } = useLocation();

  return React.useMemo(() => new URLSearchParams(search), [search]);
}

//COMPONENT FOR LOGIN PAGE
function LoginPage() {
  let query = useQuery();
  let login = query.get("login");
  return (
    <Container
      component="main"
      maxWidth="xs"
      className=""
      sx={{ margin: "auto" }}
    >
      {login != "register" ? <LoginForm /> : <RegistrationForm />}
    </Container>
  );
}

export default LoginPage;
