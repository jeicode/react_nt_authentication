import { createContext } from "react";

const AuthContext = createContext();

function AuthContextProvider({children}) {
    const [tokenUser, setTokenUser] = useState('');

    const data = {
        tokenUser, setTokenUser
    }

    return (
        <AuthContext.Provider value={data}>
            {...children }
        </AuthContext.Provider>
    )
}


export { AuthContext, AuthContextProvider}