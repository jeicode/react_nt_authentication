
import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Constants from 'expo-constants';
import RegisterForm from '../components/RegisterForm';
import globalStyles from '../shared/styles';

export default function AuthUserScreen() {
    return (
        <View style={[styles.container]}>
            <RegisterForm />
        </View>
    )
}


const styles = StyleSheet.create({
    container:{
        paddingTop: Constants.statusBarHeight,
        height: '100%'
    }
})

