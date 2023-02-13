import React from "react";
import Rdas from "./component/navbar/rdas.jsx";
import './main.scss'
// import './bootstrap.css'
import Main from "./component/main.jsx";
import { Route, Routes } from "react-router-dom";
function App(props) {
  return (
    <>
      <Rdas />

      <Routes>
        <Route path='home' element={<Main />} />
      </Routes>
    </>
  )
}
export default App;