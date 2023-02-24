import React from 'react'
import { useField } from 'formik'
import { Text, StyleSheet } from 'react-native'
import { TextInput } from 'react-native-paper'


export default function FormikInput({ name, type, value, onPress, timestamp, setValues, ...props }) {
    const [field, meta, helpers] = useField(name)
    return (
        <>

            <TextInput
                onChangeText={value => helpers.setValue(value)}
                value={value ? value : field.value}
                {...props}
            />

            {(meta.error) && <Text style={styles.txtError}>{meta.error}</Text>}
        </>
    )
}





const styles = StyleSheet.create({
    error: {
        borderColor: '#ED4756',
        borderWidth: 1
    },
    txtError: {
        marginTop: -22,
        marginBottom: 12,
        marginLeft: 10,
        color: '#ED4756'
    },
    input: {
        height: 50,
        color: '#fff',
        width: 260,
        marginBottom: 25,
        backgroundColor: '#1e3040',
        paddingHorizontal: 30,
        borderRadius: 50,
        fontSize: 14,
        borderWidth: 1,
        borderColor: '#1e3040',
    },
    datePickerTxt: {
        fontSize: 14,
    },
    datePicker: {
        justifyContent: 'center',
    }
})