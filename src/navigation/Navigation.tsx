import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../screens/HomeScreen';
import { DetailScreen } from '../screens/DetailScreen';
import { Movie } from '../interfaces';

export type RootStackParams = {
    HomeScreen: undefined,
    DetaiLScreen: Movie
}

const Stack = createStackNavigator<RootStackParams>();

export const Navigation = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
                cardStyle: {
                    // backgroundColor: 'white'
                }
            }}
        >
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
            <Stack.Screen name="DetaiLScreen" component={DetailScreen} />
        </Stack.Navigator>
    );
}