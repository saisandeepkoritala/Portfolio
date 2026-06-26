import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css'
import Navbar from "./components/Navbar"
import Themes from "./components/Themes"
import Home from "./pages/home/Home"
import About from "./pages/about/About"
import Portfolio from "./pages/portfolio/Portfolio"
import Contact from "./pages/contact/Contact"
// 1. Import your new floating bot component
import FloatingPortfolioBot from "./components/FloatingPortfolioBot" 

function App() {

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
      
      {/* 2. Place it here so it stays fixed on every single page */}
      <FloatingPortfolioBot />
      
    </BrowserRouter>
  )
}

export default App;