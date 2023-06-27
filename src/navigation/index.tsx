import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HeaderLeft, HeaderRight } from 'components/header';
import { RootStackParamList } from 'constants/navigation';
import { AddCard } from 'views/addCard';
import { Main } from 'views/main';

const Stack = createNativeStackNavigator<RootStackParamList>();

export const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerLeft: HeaderLeft,
          headerRight: HeaderRight,
          headerShadowVisible: false,
          headerTitleStyle: {
            fontFamily: 'FC-Subject-Rounded-Bold',
          },
          headerTitleAlign: 'center',
          contentStyle: {
            backgroundColor: 'white',
          },
        }}
      >
        <Stack.Screen
          name="Main"
          component={Main}
          options={{ title: 'Cards' }}
        />
        <Stack.Screen
          name="AddCard"
          component={AddCard}
          options={{ title: '' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
