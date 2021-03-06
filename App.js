import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//importaciones de pantallas componentes
import Login from './src/components/login';

import Upin from './src/components/upin';
import ConsultarUpin from './src/components/consultarUpin';
import Registro from './src/components/registro';
import Telefono from './src/components/componentsRegistro/telefono';
import ValidarTelefono from './src/components/componentsRegistro/validarTelefono';
import GeneraUpin from './src/components/componentsRegistro/generaUpin';
import CrearUpin from './src/components/componentsRegistro/crearUpin';
import ContinuarUpin from './src/components/componentsRegistro/continuarUpin';
import Inbox from './src/components/componentsInbox/inbox';
import NuevoUpin from './src/components/nuevoUpin';

const Stack = createNativeStackNavigator();


const App = () => {


  return (

    
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name= "Login" component={Login} />
        <Stack.Screen name= "Upin" component={Upin} />
        <Stack.Screen name= "ConsultarUpin" component={ConsultarUpin}  />
        <Stack.Screen name= "Registro" component={Registro}  />

        <Stack.Screen name= "Telefono" component={Telefono}  />
        <Stack.Screen name= "ValidarTelefono" component={ValidarTelefono}  />
        <Stack.Screen name= "GeneraUpin" component={GeneraUpin}  />
        <Stack.Screen name= "CrearUpin" component={CrearUpin}  />
        <Stack.Screen name= "ContinuarUpin" component={ContinuarUpin}  />
        <Stack.Screen name= "Inbox" component={Inbox}  />
        <Stack.Screen name= "NuevoUpin" component={NuevoUpin}  />

      </Stack.Navigator>
      </NavigationContainer>
      
  );
}

export default App