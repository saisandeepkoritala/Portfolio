import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css'
import Navbar from "./components/Navbar"
import Themes from "./components/Themes"
import Home from "./pages/home/Home"
import About from "./pages/about/About"
import Portfolio from "./pages/portfolio/Portfolio"
import Contact from "./pages/contact/Contact"
import FloatingPortfolioBot from './components/FloatingPortfolioBot';
import { useState, useEffect } from "react";

function App() {

  const [server, setServer] = useState(false);
  
     useEffect(() => {
      let controller;
      let timerId;
  
      const serverHealthCheck = async () => {
  
        controller = new AbortController();
        const { signal } = controller;
  
        try {
          const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/v1/user/isAlive`, { signal });
  
          if (response.ok) {
            setServer(true);
            console.log("Server is active! Stopping pings.");
          } else {
            throw new Error('Server returned an error status');
            // Throwing error to enter catch block
          }
        } catch (e) {
          if (e.name !== 'AbortError') {
            console.log('Server not ready yet, retrying in 2s...');
            timerId = setTimeout(serverHealthCheck, 2000);
          } 
          else {
            console.log('Request was intentionally aborted.');
          }
        }
      };
  
      serverHealthCheck();
  
      return () => {
        if (controller) controller.abort();
        clearTimeout(timerId);
      };
  
    }, []);

  return (
    <BrowserRouter>
      <Navbar />
      <Themes />
    
      <Routes>
        <Route index element = {<Home />}/>
        <Route path="about" element={<About/>}/>
        <Route path="portfolio" element={<Portfolio/>}/>
        <Route path="contact" element={<Contact/>}/>
      </Routes>

      <FloatingPortfolioBot server={server}/>
      
    </BrowserRouter>
  )
}

export default App;