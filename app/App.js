import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../src/screens/Login'
import CadastroScreen from '../src/screens/Cadastro'
import HomeScreen from '../src/screens/Home/Home'
import Alfabeto from '../src/screens/Game/Alfabeto'
import Quiz from '../src/screens/Game/Quiz'
import Banana from '../src/screens/Game/Palavras/Banana'


const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    //Para remover o cabeçalho usar options={{ headerShown: false }}
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen}  />
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="Alfabeto" component={Alfabeto} options={{ headerShown: false }}/>
        <Stack.Screen name="Quiz" component={Quiz}/>
        <Stack.Screen name="Palavra" component={Banana}/>



        <Stack.Screen name="Cadastro" component={CadastroScreen} />
      </Stack.Navigator>
    
  );
}
