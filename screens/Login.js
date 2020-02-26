import React, { Component } from "react";
import { Linking } from 'expo';
import { 
  View,
  Text,
  SafeAreaView,
  Image,
  ScrollView,
  Button,
  Alert,
  StyleSheet, 
  TextInput,
  TouchableOpacity,
  Textarea,
  StatusBar,
  AsyncStorage
  
} 
from "react-native";
import * as Font from 'expo-font';
import styles from './../Styles'
import { Icon } from 'react-native-eva-icons';
import axios from 'axios';



const initialState = {
  email: '',
  password: ''
};



class Login extends React.Component {

  constructor(props) {
    super(props)   

    this.onPressLogin = this.onPressLogin.bind(this)

  }

 state = initialState;


  static navigationOptions = { 
    title: '',
    headerShown: false,

  };
  
  onUsernameChange = email => {
    this.setState({email});
  };

  onPasswordChange = password => {
    this.setState({password});
  };

onPressLogin() {
    

    const {email, password} = this.state;
    
    axios.post('http://app.chseguros.com.co/api/auth', {
      email:"Juanriverarq@gmail.com",
      password:"12345"
     })
      .then(res => {
        //console.warn(JSON.stringify(res.data))
        //console.log(res);
        //console.log(res.data);
        
        
        _storeData = async () => {
          try {
            await AsyncStorage.setItem('nombre', 'JUAN');
          } catch (error) {
            // Error saving data
          }
        };

        this.props.navigation.navigate('HomeScreen');

      })

      .catch(function (error) {
    // handle error
        Alert.alert ('Error al iniciar sesión','Usuario o contraseña invalida')

        //console.warn('error')
        //console.log(error);
        
  })

}

  componentDidMount() {
    this._loadAssetAsync()
  }
    onPress = () => {
    alert ('') 
  }

  async _loadAssetAsync() {
    await Font.loadAsync({
      'poppins-regular': require('./../assets/Fonts/Poppins-Regular.ttf'),
      'poppins-semibold': require('./../assets/Fonts/Poppins-SemiBold.ttf'),
    });

    this.setState({ fontsLoaded:true })
  }
MainView() {
      const {navigate} = this.props.navigation;
    return (

      <View style={styles.containerlogin}> 
          <StatusBar  style={styles.statuslogin} barStyle='dark-content' />
     <View style={styles.logocontenedor}>
           <Image source={require('./../assets/Img/logo.png')} style={styles.logo} />
          </View>
 
       
          <View>
            <Text style={styles.textotitulo}></Text>
          </View>
          <View>
            <Text style={styles.textodescripcion}>Obtén los beneficios de ser cliente</Text>
          </View>


        <View style={styles.inputFondo}>
        <Icon name="person" width={20} height={20} fill="#7E8CBA" />
        <TextInput placeholder="Número de documento" style={styles.input} 
                  placeholderTextColor="#8E9AC3" name="email" 
                  value={this.state.email}
                  onChangeText={this.onUsernameChange}

          />
        </View>
        <View style={styles.inputFondo}>
        <Icon name="unlock" width={20} height={20} fill="#7E8CBA" />
        <TextInput secureTextEntry={true} placeholder="Contraseña" style={styles.input} 
                   placeholderTextColor="#8E9AC3" name="password" 
                   value={this.state.password}
                   onChangeText={this.onPasswordChange}

        />
       </View>
        <TouchableOpacity >
        <View style={styles.botoncontenedor}>
            <Button title="Iniciar Sesión" type="" style={styles.boton} color="white" onPress={this.onPressLogin} />
          </View>
       </TouchableOpacity>
        
      </View>
    )
  }

  render() {

    return (
       <SafeAreaView style={{flex:1}}>
        { ! this.state.fontsLoaded ? <Text>Cargando</Text> : this.MainView() }
      </SafeAreaView>
    );
  }
}

export default Login;