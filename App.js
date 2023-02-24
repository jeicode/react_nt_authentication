import Main from "./Main";
import { NavigationContainer } from '@react-navigation/native';
import { AuthContextProvider } from "./src/context/AuthContext";
import { Provider as PaperProvider } from 'react-native-paper';

export default function App() {
  return (
    <PaperProvider>
      <AuthContextProvider>
        <NavigationContainer>
          <Main />
        </NavigationContainer>
      </AuthContextProvider>
    </PaperProvider>
  )
}

