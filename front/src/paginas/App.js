import React, { useState, useEffect } from "react";
import HeaderStart from '../componentes/HeaderStart';
import { CssBaseline } from "@mui/material";
import "./App.css";
import useApp from "../hook/useApp";
import { appStyle, userObj } from "../constants/consts";
import { useNavigate } from "react-router";
import Homepage from "../componentes/HomePage";
import HeaderWithDropdown from "../componentes/HeaderStartWithDropdown";

const App = () => {
  const { handleOptionChange } = useApp();
  const [user, setUser] = useState(null)

  const navigate = useNavigate();

  useEffect(() => {
    navigate("/home");
  }, [user]);



  const handleLogIn = (userData) => {
    userData.then((userData) => {
      setUser(userData)
    }
    )
  }

  const handleLogout= () =>{
    setUser(userObj)
  }

  return (
    <>
      <CssBaseline />
      <div style={appStyle}>
        {(user && user.mail && user.mail.length > 0) ?
          (
            <HeaderWithDropdown onLogout={handleLogout} onOptionChange={handleOptionChange} userActual={user} handleOption={handleOptionChange} />

          ) : (
            <>
              < HeaderStart onLogin={handleLogIn} />
              <Homepage user={userObj}/>
            </>
          )}

      </div >
    </>
  );

};

export default App;
