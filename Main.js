import { StatusBar } from 'expo-status-bar'
import React, { useContext, useEffect } from 'react'
import { AuthContext } from './src/context/AuthContext'
import AuthUserStack from './src/navigation/stacks/AuthUserStack'
import HomeStack from './src/navigation/stacks/HomeStack'

export default function Main() {
    const { authUser, onAuthStateChanged } = useContext(AuthContext)
    useEffect(() => {onAuthStateChanged()}, [onAuthStateChanged])
    if (authUser === undefined) return null;
    return (
        <>
            <StatusBar style="light" backgroundColor='#15212b' />
            {authUser ? <HomeStack /> : <AuthUserStack />}
        </>
    )
}