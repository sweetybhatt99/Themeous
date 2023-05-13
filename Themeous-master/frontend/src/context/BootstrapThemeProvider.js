import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const BootstrapContext = createContext();

const BootstrapProvider = ({children, currentBootstrap}) => {

    const [loggedIn, setLoggedIn] = useState(currentBootstrap!==null);
    const navigate= useNavigate();

    const logout = () => {
        sessionStorage.removeItem('bootstrap');
        setLoggedIn(false);
        navigate('/main/login');
    }

    return <BootstrapContext.Provider value={{loggedIn, setLoggedIn, logout}}>
        {children}
    </BootstrapContext.Provider>
}

export const useBootstrapContext = () => useContext(BootstrapContext);

export default useBootstrapContext;
