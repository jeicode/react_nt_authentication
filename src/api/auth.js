import { API_URL } from "../constants/api"


export const loginUser = async(credentials) => {
    try {
        const res = await globalThis.fetch(`${API_URL}/auth/local`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(credentials)
        } )
        return res.json()
    } catch (error) {
        console.log("error post user ", error)
    }
}

export const registerUser = async(user) => {
    try {
        const res = await fetch(`${API_URL}/auth/local/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        } )
        return res.json()
    } catch (error) {
        console.log("error post user")
    }
}