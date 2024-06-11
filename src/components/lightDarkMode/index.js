import React, { useState } from "react";
import useLocalStorage from "./useLocalStorage";
import "./styles.css";

const LightDark = () => {
  const [theme, setTheme] = useLocalStorage("theme", "dark");
  function handleToggleTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  }
  console.log(theme);
  return (
    <div className={theme === "light" ? "lightTheme" : "darkTheme"}>
      <div className="LightDarkContainer">
        <p>Hello World!</p>
        <button onClick={handleToggleTheme}>Change Theme</button>
      </div>
    </div>
  );
};

export default LightDark;
