import { useContext, useState } from 'react';
import { registerUser } from '../api/auth';
import { AuthContext } from '../context/AuthContext';

export default function useRegisterUser() {
    const { setAuthUser } = useContext(AuthContext);
    const [isLoading, setIsloading] = useState(false)

    const register = async (user, setErrors) => {
        setIsloading(true);
        try {
            const { error, ...res } = await registerUser(user);
            const errorMsg = error?.message
            setIsloading(false);
            if (errorMsg) setErrors(errorMsg)
            else if (res?.jwt) setAuthUser(res);
            else setAuthUser(null);

        } catch (error) {
            console.log("error in register() ", error)
        }

    }

    return { isLoading, register }

}