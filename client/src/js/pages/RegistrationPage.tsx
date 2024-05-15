import { Container } from "@mui/material";
import RegistrationForm from "../components/RegistrationForm";


//COMPONENT FOR LOGIN PAGE
function RegistrationPage() {
  
  return (
    <Container component="main" maxWidth="xs" className="" sx={{ margin: "auto" }}>
       <RegistrationForm />
    </Container>
  );
}

export default RegistrationPage;
