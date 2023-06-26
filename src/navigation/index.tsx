import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Header } from 'components/header';
import { Card } from 'views/card';
import { Main } from 'views/main';

const Stack = createNativeStackNavigator();

export const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          header: ({ options: { title } }) => <Header title={title} />,
          contentStyle: {
            backgroundColor: 'white',
          },
        }}
      >
        <Stack.Screen
          name="main"
          component={Main}
          options={{ title: 'Cards' }}
        />
        <Stack.Screen name="card" component={Card} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
