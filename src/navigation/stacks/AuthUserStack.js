import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ROUTES } from '../../constants/routes';
import LoginUserScreen from '../../screens/LoginUserScreen';
import RegisterUserScreen from '../../screens/RegisterUserScreen';

const Stack = createNativeStackNavigator();

export default function AuthUserStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name={ROUTES.LOGIN_USER} component={LoginUserScreen} />
            <Stack.Screen name={ROUTES.REGISTER_USER} component={RegisterUserScreen} />
        </Stack.Navigator>
    );
}