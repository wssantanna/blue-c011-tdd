
import { createContext, useState } from 'react'; 

const AuthorizateContext = createContext(null);

function AuthorizateContextProvider({ children }) {
    
    const [token, setToken] = useState({});

    return (
        <AuthorizateContext.Provider value={{ token, setToken }}>
            {children}
        </AuthorizateContext.Provider>
    );
}

export { 
    AuthorizateContext, 
    AuthorizateContextProvider
};