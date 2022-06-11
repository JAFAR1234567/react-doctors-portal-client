import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./pages/about/About";
import Appoinment from "./pages/appoinment/Appoinment";
import Contact from "./pages/contact/Contact";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/appoinment" element={<Appoinment />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
