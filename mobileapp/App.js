import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainScreen from './screens/main';
import { useFonts } from 'expo-font';
import ScanScreen from './screens/scan';
import IconsTab from './components/icons-tab';
import ResultScreen from './screens/result';

const Stack = createNativeStackNavigator()

export default function App() {
  const [loaded,error] = useFonts({
    "MMPT-B": require("./assets/fonts/MMPT-B.otf"),
    "MMPT-L": require("./assets/fonts/MMPT-L.otf"),
    "MMPT-SR": require("./assets/fonts/MMPT-SR.otf"),
  })
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}} >
        <Stack.Screen name="Main" component={MainScreen} />
        <Stack.Screen name="Scan" component={ScanScreen} />
        <Stack.Screen name="Result" component={ResultScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}