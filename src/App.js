import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Dashboard from "./pages/dashboard";
import Vacancy from "./pages/vacancy";
import FilterBar from "./components/filterBar";
import LandingPage from "./pages/landingPage";
import { GlobalProvider } from "./context/GlobalContext";

function App() {
  return (
    <>
      <BrowserRouter><Navbar />
      <GlobalProvider>
        <Routes>
          <Route path='/' element={<LandingPage />}/>
          <Route path='/job-vacancy' element={<Vacancy />}/>
          <Route path='/dashboard' element={<Dashboard/>}/>
        </Routes></GlobalProvider><Footer />
      
      
        
        
      </BrowserRouter>
    </>
  );
}

export default App;
