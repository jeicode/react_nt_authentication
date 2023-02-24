import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Button, Card, TextInput } from 'react-native-paper'
import globalStyles from '../shared/styles'

export default function RegisterUserScreen() {
    return (
        <View style={styles.container}>
            <Card>
                <Card.Title title="REGISTER" style={globalStyles.textCenter} />
                <Card.Content>
                    <TextInput
                        name='email'
                        label="Email"
                    />

                    <TextInput
                        label="Full name"
                        name='fullName'
                    />

                    <TextInput
                        label="Identification"
                        name='identification'
                    />

                    <TextInput
                        label="Password"
                        name='password'
                        secureTextEntry={true}
                    />

                    <TextInput
                        label="Repeat Password"
                        secureTextEntry={true}
                        name='password2'
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