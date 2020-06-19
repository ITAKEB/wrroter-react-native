import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, TextInput,
Button,
ImageBackground} from 'react-native';


export default function App() {
  return (
    <ImageBackground style={styles.container}>
      
        
      <View style={styles.logotipo}>
        <Image 
        source={ require("./assets/logoWrotter.png")} style={styles.logo}></Image>
      </View>

      <View style={styles.login}>
            <TextInput 
            selectionColor="red"
            maxLenght={20}
            placeholder="Usuario"
            style={styles.textinputs}/>
            <TextInput
            selectionColor="red"
            placeholder="Contraseña"
            style={styles.textinputs}/>
          <View style={styles.botones}>
            <View style={styles.boton}>
              <Button color="#434343" title="Iniciar sesión"/>
            </View>
            <View  style={styles.boton}>
              <Button color="#434343" title="Registrarse"/>
            </View>
          </View>
          
        </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:"column",
  },
  logo:{
    marginBottom: 0,
    width:400,
    height: 200,
    resizeMode: "contain",
  },
  inputs:{
    alignContent: "center",
    justifyContent: "center"
  },  
  textinputs:{
    borderWidth:1,
    padding:1,
    marginTop: 10,
    color: "black",
    width:200
  },
  logotipo:{
    flex:1,
    alignItems: "center",
    justifyContent: "flex-end"
  },
  login:{
    justifyContent: 'flex-start',
    alignItems: 'center',
    flex: 1,
    marginTop: 15
  },  
  botones:{
    flexDirection:"row",
    marginTop: 10,
       
  },
  boton:{
    margin: 10,
    color: "black"
  }
});
