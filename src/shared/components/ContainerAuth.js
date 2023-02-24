import React from 'react'
import { StyleSheet, View } from 'react-native'


export default function ContainerAuth({children}) {
    return (
        <View style={styles.container}>
            {children}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 50,
        height: '100%'
    },

})