import {Header} from "components/Header";
import {MigalaRegistro} from "components/MigalaRegistro";
import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {WelcomePage} from "components/Welcome/WelcomePage";


export const MainRouter = () => {

  return (

    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={
              <>
                <Header/>
                <MigalaRegistro/>
              </>
            }/>
            <Route path="welcome" element={<WelcomePage/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}