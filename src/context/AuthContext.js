import { createContext, useCallback, useEffect, useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';

const AuthContext = createContext();

function AuthContextProvider({children}) {
    const [authUser, setAuthUser] = useState(undefined)

    useEffect( () => {
        if (authUser !== undefined){
            if (authUser) AsyncStorage.setItem('authUser', JSON.stringify(authUser))
            else AsyncStorage.removeItem('authUser');
        }
    },[authUser])


    const onAuthStateChanged = useCallback( async() => {
        try {
            const res = await AsyncStorage.getItem('authUser')
            const user = JSON.parse(res);
            setAuthUser(user);
        } catch (error) {
            console.error("error to onAuthStateChanged ", error)
        }

    }, [])
    
    const data = {
        authUser, setAuthUser, onAuthStateChanged
    }

    return (
        <AuthContext.Provider value={data}>
            {children}
        </AuthContext.Provider>
    )
}


export { AuthContext, AuthContextProvider}