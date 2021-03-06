import React, { useState, Component } from 'react';
import { StyleSheet, Text, View, Image, Linking, TextInput, Alert, Modal, TouchableOpacity } from "react-native";
import { Button } from 'react-native-elements';
import logo from "../../assets/img/logo.png";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import {validacionCurp} from "../api/validacionCurp";
import { validacionTelefono } from '../api/validacionTelefono';

//recuperacion uPIN

export default class ConsultarUpin extends React.Component{

    constructor(){
        super()
        this.state={
          emailv: '',
          show: false,
          identificadorJourney: '',
          telefono:''
        }
      }
      

//////////////// validacion email
        async validado () {
          //CONSULTA BASE DE DATOS PARA TELEFONO
          
          const obj= {
            curp: this.props.route.params.curp,
            identificadorJourney: "501"
          }
          
          const apiResponse=await validacionCurp(obj);
          if(apiResponse.codigo==="000"){
            const telefonoBase = apiResponse.respuesta;

            this.setState({telefono:telefonoBase})
            this.setState({identificadorJourney:"501"})

            //console.log(telefonoBase);

            //manda codigo a celular
            const obj={numero: this.state.telefono}
            const telefono = await validacionTelefono(obj);

            if(telefono.respuesta==="000"){
              this.setState({show:true})
            }else {
              console.log("Mensaje no enviado.")
            }


            
          }else {
            console.log("No registrado.")
          }

          
            }



          hidden(){
            this.setState({show:false})
            this.props.navigation.navigate('NuevoUpin', 
            {curp: this.props.route.params.curp, 
              telefono: this.state.telefono, 
              identificadorJourney: this.state.identificadorJourney})
          }



    render(){


    return (
      <KeyboardAwareScrollView>
        <View style={{backgroundColor: 'white'}}>
            
            <Image style={styles.logo} source={logo}/>
            <Text style={styles.title}>Recuperacion uPIN</Text>
            <Text style={styles.email}>Se te enviara un codigo a tu telefono.</Text>

            <View style={styles.btn}>
          <TouchableOpacity style={styles.btn2}
            onPress={() => this.validado()}
            >
          <Text style={{color:'white', fontFamily: "Helvetica Neue LT Std"}}>ENVIAR CODIGO</Text>
          </TouchableOpacity>
            
          </View>
            

        <Modal
        transparent={true}
        visible={this.state.show}
        >
          
            <View style={styles.modalcontainer}>
            <View style={styles.modaltextcontainer}>
              <Text style={styles.modaltext}>Codigo Enviado.</Text>
              <Text style={styles.modaltext2}>Revisa tu bandeja de mensajeria.</Text>
        
              <View style={styles.btn}>
                  <TouchableOpacity style={styles.btn2}
                  onPress={() => this.hidden()}
                  >
                    <Text style={{color:'white', fontFamily: "Helvetica Neue LT Std"}}>ENTENDIDO</Text>
                  </TouchableOpacity>
                  </View>
            </View>
            </View>

        </Modal>

        </View>
        </KeyboardAwareScrollView>
    )
}
}

const styles = StyleSheet.create({
    title: {
     color: "black",
     marginLeft: 'auto',
     marginRight: 'auto',
     marginBottom:20,
     fontWeight:'bolder',
    fontFamily: "Helvetica Neue LT Std",
    fontSize:20
    },
    logo: {
        width: 150,
        height: 150,
        display: 'flex',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom: 20
       },
       input: {
        height:40, 
        marginTop: 10,
        marginLeft:20,
        marginRight:20,
        borderWidth: 1,
        marginBottom:20,
        textTransform: 'lowercase',
        borderColor:'rgba(206, 31, 40, 1)',
        fontFamily: "Helvetica Neue LT Std"
       },
       email: {
        color: "black",
        marginLeft:20,
        marginBottom:20,
        fontSize:15,
        fontFamily: "Helvetica Neue LT Std"
       },
       btn: {
        marginTop: 20,
        marginLeft: 20,
        marginBottom: 20,
        marginRight: 20,
        borderWidth: 1,
        borderRadius: 20,
        backgroundColor:'rgba(206, 31, 40, 1)',
        fontFamily: "Helvetica Neue LT Std",
        alignItems:'center'
    
      },
      btn2: {
        marginLeft: 20,
        marginRight: 20,
        marginTop:10,
        marginBottom:10,
        backgroundColor:'rgba(206, 31, 40, 1)',
        fontFamily: "Helvetica Neue LT Std",
        alignItems:'center'
    
      },
       //modal
  modalcontainer: {
    flex:1,
    alignItems:'center',
    justifyContent: 'center',
    alignItems: 'center',
    textAlignVertical: 'center',
    alignContent: 'center',
    fontFamily: "Helvetica Neue LT Std"
    
  },
  modaltextcontainer: {
    alignItems: 'center',
    backgroundColor:'white',
    borderWidth:3,
    margin:50,
    padding:40,
    fontFamily: "Helvetica Neue LT Std"
    
  },
  modaltext: {
    fontSize:20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
    fontFamily: "Helvetica Neue LT Std"
    
  },
  modaltext2: {
    textAlign: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
    fontFamily: "Helvetica Neue LT Std",
    fontSize:20,
    
  },
})