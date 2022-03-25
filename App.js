
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//importaciones de pantallas componentes
import Login from './src/components/login';
import upin from './src/components/upin';
import consultarUpin from './src/components/consultarUpin';
import registro from './src/components/registro';
import telefono from './src/components/componentsRegistro/telefono';
import validarTelefono from './src/components/componentsRegistro/validarTelefono';
import generaUpin from './src/components/componentsRegistro/generaUpin';

const Stack = createNativeStackNavigator();


const App = () => {



  return (

    
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name= "Login" component={Login} options={{title:''}} />
        <Stack.Screen name= "upin" component={upin} options={{title:''}} />
        <Stack.Screen name= "consultarUpin" component={consultarUpin} options={{title:''}} />
        <Stack.Screen name= "registro" component={registro} options={{title:'Registro'}} />

        <Stack.Screen name= "telefono" component={telefono} options={{title:'Telefono'}} />
        <Stack.Screen name= "validarTelefono" component={validarTelefono} options={{title:'validarTelefono'}} />
        <Stack.Screen name= "generaUpin" component={generaUpin} options={{title:'generaUpin'}} />

      </Stack.Navigator>
      </NavigationContainer>
      
  );
}

export default App