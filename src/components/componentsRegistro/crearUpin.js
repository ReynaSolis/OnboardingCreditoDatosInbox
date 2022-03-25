import React from 'react';
import { StyleSheet, Text, View, Image, Linking, TextInput, Alert } from "react-native";
import { Button } from 'react-native-elements';
import logo from "../../../assets/img/logo.png";

//curp
export default function crearUpin ({ navigation}){

  return (
        <View>
         
         <Image style={styles.logo} source={logo}/>
         <Text style={styles.title}>Crear uPIN</Text>
         <Text style={styles.instruccion}>Establece tu uPIN de 6 numeros y confirmalo.</Text>

         <Text style={styles.instruccion}>uPIN</Text>

         <TextInput style={styles.input} 
         placeholder="uPIN 6 digitos"
         maxLength={6}
         secureTextEntry={true}
         keyboardType="numeric"
         
         />

        <Text style={styles.instruccion}>Confirmar uPIN:</Text>

        <TextInput style={styles.input} 
        placeholder="uPIN 6 digitos"
        maxLength={6}
        secureTextEntry={true}
        keyboardType="numeric"
        />

        <View style={styles.btn}>
        <Button
        theme={{ colors: { primary: '#000000' } }}
        title= "ESTABLECER uPIN"
        type="clear"
        onPress={() => {
            navigation.navigate('continuarUpin')
        }

        } 
        />

        </View>

         </View>

         
     
  );
}






const styles = StyleSheet.create({
   title: {
    color: "black",
    marginLeft: 20,
    marginBottom: 20,
    fontWeight: 'bold',
   },
   logo: {
    width: 150,
    height: 150,
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: 20
   },
   input: {
    height:40, 
    marginTop: 10,
    marginBottom: 30,
    marginLeft:20,
    marginRight:20,
    borderWidth: 1,
   },
  btn: {
    marginBottom:30,
    marginTop: 30,
    marginLeft: 20,
    marginRight: 20,
    borderWidth:1,
    borderRadius:20,
  },
  instruccion: {
    color: "black",
    marginLeft: 20,
    marginBottom: 20,
   },
   advertencia: {
    color: "black",
    marginTop:20,
    marginBottom:20,
    textAlign: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    textAlignVertical: 'center',
    alignContent: 'center',
   },
   reenviar: {
    color: "black",
    marginTop:30,
    marginLeft: 'auto',
    marginRight: 'auto',
    textAlign: 'center',
    fontWeight: 'bold',
   },


});
