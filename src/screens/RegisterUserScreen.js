import React, { useState } from 'react'
import { Button, Card } from 'react-native-paper'
import globalStyles from '../shared/styles'
import ContainerAuth from '../shared/components/ContainerAuth'
import { StyleSheet, Text } from 'react-native'
import { ROUTES } from '../constants/routes'
import { Formik } from 'formik'
import FormikInput from '../shared/components/FormikInput'
import { loginSchema, registerSchema } from '../formsValidations/authSchemas'
import useLogin from '../hooks/useLogin'
import useRegisterUser from '../hooks/useRegisterUser'


export default function RegisterUserScreen({ navigation }) {

    return (
        <ContainerAuth>
            <Card>
                <Card.Title title="LOGIN" style={globalStyles.textCenter} />
                <Card.Content>
                    <Form navigation={navigation} />
                </Card.Content>
            </Card>
        </ContainerAuth>
    )
}

function Form({ navigation }) {
    const [extraErrors, setExtraErrors] = useState('');
    const { register } = useRegisterUser()

    const registerUser = (values) => {
        const data = {username: values?.email, ...values}
        register(data, setExtraErrors)
    }
    const initialValues = {
        email: '',
        fullName: '',
        identification: '',
        password: '',
        repeatPassword: ''
    }

    return (
        <Formik
            validationSchema={registerSchema}
            initialValues={initialValues}
            onSubmit={(values) => registerUser(values)}>
            {({ handleSubmit }) => (
                <>
                    <FormikInput
                        placeholder='Email'
                        name='email' />
                    <FormikInput
                        placeholder='Full Name'
                        name='fullName' />
                    <FormikInput
                        placeholder='Number identification'
                        name='identification' />
                    <FormikInput
                        placeholder='Password'
                        secureTextEntry
                        name='password' />
                    <FormikInput
                        placeholder='Repeat Password'
                        secureTextEntry
                        name='repeatPassword' />
                    <Button mode="text" onPress={() => navigation.navigate(ROUTES.LOGIN_USER)}>
                        go Login
                    </Button>
                    <Card.Actions>
                        <Button onPress={handleSubmit} type="submit">Register</Button>
                    </Card.Actions>
                    {extraErrors && <Text style={{ color: 'red' }}>{extraErrors}</Text>}
                </>
            )}
        </Formik>
    )
}

const styles = StyleSheet.create({
    content: {

    }
})
