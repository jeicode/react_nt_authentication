import React, { useState } from 'react'
import { Button, Card } from 'react-native-paper'
import globalStyles from '../shared/styles'
import ContainerAuth from '../shared/components/ContainerAuth'
import { StyleSheet, Text } from 'react-native'
import { ROUTES } from '../constants/routes'
import { Formik } from 'formik'
import FormikInput from '../shared/components/FormikInput'
import { loginSchema } from '../formsValidations/authSchemas'
import useLogin from '../hooks/useLogin'


export default function LoginUserScreen({ navigation }) {

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

function Form({navigation}) {
    const {login} = useLogin()
    const [extraErrors, setExtraErrors] = useState('');

    const initialValues = {
        identifier: '',
        password: '',
    }

    return (
        <Formik
            validationSchema={loginSchema}
            initialValues={initialValues}
            onSubmit={ (values) => login(values, setExtraErrors) }>
            {({ handleSubmit }) => (
                <>
                    <FormikInput
                        placeholder='Email'
                        name='identifier' />
                    <FormikInput
                        placeholder='Password'
                        secureTextEntry
                        name='password' />
                    <Button mode="text" onPress={() => navigation.navigate(ROUTES.REGISTER_USER)}>
                        Register
                    </Button>
                    <Card.Actions>
                        <Button onPress={handleSubmit} type="submit">Login</Button>
                    </Card.Actions>
                    { extraErrors && <Text style={{color:'red'}}>{extraErrors}</Text>}
                </>
            )}
        </Formik>
    )
}

const styles = StyleSheet.create({
    content: {

    }
})
