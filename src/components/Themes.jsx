import { useEffect, useState } from 'react'
import {themes} from "../data"
import ThemeItem from "./ThemeItem"
import { FaCog } from 'react-icons/fa'
import {BsSun, BsMoon} from "react-icons/bs"
import "./theme.css"

const getStorageColor = () =>{
  let color = 'hsl(80, 61%, 50%)';
  if (localStorage.getItem('color')){
    color = localStorage.getItem('color');
  }
  return color
}
const getStorageTheme = () =>{
  let theme = 'light-theme';
  if (localStorage.getItem('theme')){
    theme = localStorage.getItem('theme');
  }
  return theme
}

function Themes() {
  const [showSwitcher, setShowSwitcher] = useState(false)
  const [color, setColor] = useState(getStorageColor());
  const [theme, setTheme] = useState(getStorageTheme());

  const Animate = ()=>{
    setShowSwitcher(!showSwitcher)
  }

  const themeToggler = ()=>{
    if(theme === 'light-theme'){
      setTheme('dark-theme')
    }
    else{
      setTheme('light-theme')
    }
  }

  const changeColor = (color)=>{
    setColor(color)
  }

    useEffect(()=>{
      document.documentElement.style.setProperty('--first-color', color)
      localStorage.setItem('color', color)
    }, [color])

    useEffect(()=>{
      document.documentElement.className = theme
      localStorage.setItem('theme', theme)
    }, [theme])

  return (
    <div>
      <div
        className={`${showSwitcher ? "show__switcher" : ""} style__switcher`}
      >
        <div className="style__switcher-toggler" onClick={Animate}>
          <FaCog />
        </div>

        <div className="theme__toggler" onClick={themeToggler}>
          {theme === "light-theme" ? <BsMoon /> : <BsSun />}
        </div>

        <h3 className="style__switcher-title">Style Switcher</h3>
        <div className="style__switcher-items">
          {themes.map((theme, index) => {
            return (
              <ThemeItem key={index} {...theme} changeColor={changeColor} />
            );
          })}
        </div>

        <div className="style__switcher-close" onClick={Animate}>
          &times;
        </div>
      </div>
    </div>
  );
}

export default Themes