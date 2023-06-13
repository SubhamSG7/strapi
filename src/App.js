import React from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from "./component/home";
const app=()=>{
  return(
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}
export default app;