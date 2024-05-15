import "../public/css/App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./js/components/NavBar";
import Home from "./js/pages/Home";
import Specials from "./js/components/Specials";
import SpecialsOnNow from "./js/pages/SpecialsOnNow";
import SpecialsByDay from "./js/pages/SpecialsByDay";
import Footer from "./js/components/Footer";
import LoginPage from "./js/pages/LoginPage";
import RegistrationPage from "./js/pages/RegistrationPage";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="specials" element={<Specials />}>
          <Route path="on-now" element={<SpecialsOnNow />} />
          <Route path="by-day" element={<SpecialsByDay />} />
        </Route>
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegistrationPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
