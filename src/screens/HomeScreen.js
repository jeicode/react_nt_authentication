import { View, Text } from 'react-native'
import React, { useContext } from 'react'
import { Button } from 'react-native-paper'
import { AuthContext } from '../context/AuthContext'

export default function HomeScreen() {
    const {setAuthUser} = useContext(AuthContext)
    return (
        <View>
            <Text>HomeScreen</Text>
            <Button onPress={() => setAuthUser(null)}>Log out</Button>
        </View>
    )
}