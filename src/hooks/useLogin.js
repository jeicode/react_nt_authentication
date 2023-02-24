import { useContext, useState } from 'react';
import { loginUser } from '../api/auth';
import { AuthContext } from '../context/AuthContext';

export default function useLogin() {
    const { setAuthUser } = useContext(AuthContext);
    const [isLoading, setIsloading] = useState(false)

    const login = async (credentials, setErrors) => {
        setIsloading(true);
        try {
            const {error, message ,...res} = await loginUser(credentials);
            const errorMsg = error?.message || message?.[0]?.messages?.[0]?.message;
            setIsloading(false);
            if (errorMsg) setErrors(errorMsg)
            else if (res?.jwt) setAuthUser(res);
            else setAuthUser(null);

        } catch (error) {
            console.log("error in login() ", error)
        }

    }

    return { isLoading, login }

}