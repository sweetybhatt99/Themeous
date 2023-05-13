import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Admin from "./components/admin";
import Main from "./components/main";
import Login from "./components/main/Login";
import Register from "./components/main/Register";
import User from "./components/user";
import Customize from "./components/user/Customize";
import MUICustomizer from "./components/user/MUICustomizer";
import { ThemeProvider, createTheme, useTheme } from "@mui/material";
import { useState } from "react";
import BrowseFrameworks from "./components/main/BrowseFrameworks";
import { Toaster } from "react-hot-toast";
import AdminProvider from "./context/AdminProvider";
import UserProvider from "./context/UserProvider";
import AdminAuth from "./auth/AdminAuth";
import UserAuth from "./auth/UserAuth";
import UserProfile from "./components/user/UserProfile";
import Home from "./components/main/Home";
import MyThemes from "./components/user/MyThemes";
import { ConfigProvider } from "antd";
import AntDCustomizer from "./components/user/AntDCustomizer";

function App() {
  const [mainTheme, setMainTheme] = useState({});
  const [antTheme, setAntTheme] = useState({
    token: {
      colorPrimary: '#00b96b',
    },
  });
  const theme = createTheme(mainTheme);

  const [currentUser, setCurrentUser] = useState(
    JSON.parse(sessionStorage.getItem("user"))
  );
  const [currentAdmin, setCurrentAdmin] = useState(
    JSON.parse(sessionStorage.getItem("admin"))
  );

  return (
    <div>
      <BrowserRouter>
        <Toaster position="top-center" />
        <AdminProvider currentAdmin={currentAdmin}>
          <UserProvider currentUser={currentUser}>
            <Routes>
              <Route path="/" element={<Navigate to="/main/home" />} />
              <Route
                path="admin"
                element={
                  <AdminAuth>
                    <Admin />
                  </AdminAuth>
                }
              >
                {/* <Route path='managegames' element={<ManageGames />}  /> */}
              </Route>
              <Route
                path="user"
                element={
                  <UserAuth>
                    <User />
                  </UserAuth>
                }
              >
                <Route path="profile" element={<UserProfile />} />
                <Route path="customizebootstrap" element={<Customize />} />
                <Route
                  path="customizemui"
                  element={
                    <ThemeProvider theme={theme}>
                      <MUICustomizer
                        mainTheme={mainTheme}
                        setMainTheme={setMainTheme}
                      />
                    </ThemeProvider>
                  }
                />
                <Route path="mythemes" element={<MyThemes />} />

                <Route
                  path="muicustomizer"
                  element={
                    <ThemeProvider theme={theme}>
                      <MUICustomizer
                        mainTheme={mainTheme}
                        setMainTheme={setMainTheme}
                      />
                    </ThemeProvider>
                  }
                />
                <Route
                  path="customizeant"
                  element={
                    <ConfigProvider theme={antTheme}>
                      <AntDCustomizer
                        mainTheme={antTheme}
                        setMainTheme={antTheme}
                      />
                    </ConfigProvider>
                  }
                />
              </Route>
              <Route path="main" element={<Main />}>
                <Route path="login" element={<Login />} />
                <Route path="signup" element={<Register />} />
                <Route path="home" element={<Home />} />
                <Route path="browse" element={<BrowseFrameworks />} />
              </Route>
            </Routes>
          </UserProvider>
        </AdminProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
