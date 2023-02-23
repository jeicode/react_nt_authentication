import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { SafeAreaView } from 'react-native'
import AuthUserScreen from './src/screens/AuthUserScreen'


export default function Main() {
    return (
        <>
            <StatusBar style="light" backgroundColor='#15212b' />
            <SafeAreaView>
                <AuthUserScreen />
            </SafeAreaView>
        </>
    )
}