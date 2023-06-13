import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { Navigation } from './src/navigation/Navigation';
import { GradientProvider } from './src/contex/GradientContext';
// import { FadeScreen } from './src/screens/FadeScreen';


export default function App() {
  return (
    <GradientProvider>
      <NavigationContainer>
        <Navigation />
        {/* <FadeScreen /> */}
      </NavigationContainer>
    </GradientProvider>
  )
}