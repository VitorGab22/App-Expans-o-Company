import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
const { Navigator, Screen } = createStackNavigator();

import Home from '../pages/Home';
import Home2 from '../pages/Home2';
import Empresa from '../pages/Empresa';
import Dicas from '../pages/Dicas';
import Login from '../pages/LoginScreen/LoginScreen';
import Register from '../pages/RegisterScreen/RegisterScreen';
import Formulario from '../pages/Formulario';
import UserForm from '../pages/views/UserForm';
import UserList from '../pages/views/UserList';
import Lista from '../pages/Lista';


export function AuthRoutes() {
  return (
    <Navigator
      initialRouteName="inicio"
    >
      <Screen
        name="LoginScreen"
        component={Login}
        options={{ headerShown: null }}
      />
      <Screen
        name="RegisterScreen"
        component={Register}
        options={{ headerShown: null }}
      />
      <Screen
        name="Home"
        component={Home}
        options={{ headerShown: null }}
      />
      <Screen
        name="Dicas"
        component={Dicas}
        options={{ headerShown: null }}
      />
      <Screen
        name="Home2"
        component={Home2}
        options={{ headerShown: null }}
      />
      <Screen
        name="Empresa"
        component={Empresa}
        options={{ headerShown: null }}
      />
      <Screen
        name="Formulario"
        component={Formulario}
        options={{ headerShown: null }}
      />
      <Screen
        name="UserForm"
        component={UserForm}
        options={{ headerShown: null }}
      />
      <Screen
        name="UserList"
        component={UserList}
        options={{ headerShown: null }}
      />
      <Screen
        name="Lista"
        component={Lista}
        options={{ headerShown: null }}
      />


    </Navigator>
  )
}