import React, { useState } from 'react'

function useThemeToggle() {
    const [theme, setTheme] = useState("Light")

    const changeTheme=()=>{
        setTheme(theme === "Light" ? "Dark" : "Light");
    }
  return {theme, changeTheme}

}

export default useThemeToggle