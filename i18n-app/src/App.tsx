import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useTranslation } from "react-i18next";



function App() {
  console.log("rendering App")
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng:string)=>{
    i18n.changeLanguage(lng)
  }

  return (
    <>
      <h1>{t("Welcome to React")}</h1>
      <button onClick={() => changeLanguage('en')}>en</button>
      <button onClick={() => changeLanguage('fr')}>fr</button>
    </>
  );
}

export default App;
