import {StyleSheet} from 'react-native'
import { COLORS } from '../../constants/colors'

const globalStyles = StyleSheet.create({
    textLigth:{
        color: COLORS.LIGTH
    }, 
    backgroundColor:{
        backgroundColor: COLORS.PRIMARY
    },
    inspect: {
        borderColor: 'green',
        borderWidth: 2
    },
    centerContent: {
        flex: 1,
        justifyContent: 'center', 
        alignItems: 'center'
    },
    textCenter:{
        textAlign: 'center'
    }
})

export default globalStyles