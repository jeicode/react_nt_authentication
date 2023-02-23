import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Button, Card, TextInput } from 'react-native-paper'
import globalStyles from '../shared/styles'

export default function RegisterForm() {
    return (
        <View style={styles.container}>
            <Card>
                <Card.Title title="LOGIN" style={globalStyles.textCenter} />
                <Card.Content style={styles.content}>
                    <TextInput
                        label="Email"
                    />

                    <TextInput
                        label="Password"
                    />
                </Card.Content>
                <Card.Actions>
                    <Button>Cancel</Button>
                    <Button>Login</Button>
                </Card.Actions>
            </Card>

        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 50,
    },

})