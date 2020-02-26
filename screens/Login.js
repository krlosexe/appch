import React, {useState, useEffect} from "react";
import { View, Text, SafeAreaView, Image, Button, Alert, TextInput, TouchableOpacity, StatusBar, AsyncStorage } from "react-native";
import * as Font from 'expo-font';
import styles from './../Styles'
import { Icon } from 'react-native-eva-icons';
import axios from 'axios';


function LoginScreen(props){

	const [ data , setData ] = useState({
		email : 'Juanriverarq@gmail.com',
		password : '12345'
	})



	const [fontsLoaded , setFontsLoaded] = useState(false)



	useEffect(()=>{
		const _loadAssetAsync = async  ()=> {

			await Font.loadAsync({
		  		'poppins-regular': require('./../assets/Fonts/Poppins-Regular.ttf'),
		  		'poppins-semibold': require('./../assets/Fonts/Poppins-SemiBold.ttf'),
			}) 
			setFontsLoaded(true) }
			_loadAssetAsync()
	},[])



	const _storeData = async () => {
		try {
		  await AsyncStorage.setItem('nombre', 'JUAN');
		  
		  props.navigation.navigate('HomeScreen');

		} catch (error) {
			console.warn('Error al escribir en storage')
		}
	  };



	function onChangeDataHandler( e, name ){

		const { text } = e.nativeEvent;

		setData({
			...data,
			[name] : text
		})
	}



	function onPressLogin() {
		axios.post('http://app.chseguros.com.co/api/auth', data ).then(res => {
			_storeData()
		  }).catch(error=>{
			Alert.alert ('Error al iniciar sesión','Usuario o contraseña invalida')			
	  	})
	}



  if(!fontsLoaded)
  	return  <SafeAreaView style={{flex:1}}> 
            	<Text>Cargando</Text>
          	</SafeAreaView>



  	return <SafeAreaView style={{flex:1}}>

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
		  placeholderTextColor="#8E9AC3" 
		  name="email" 
          value={data.email}
          onChange={(evt)=>onChangeDataHandler(evt, 'email')} />

</View>
<View style={styles.inputFondo}>
<Icon name="unlock" width={20} height={20} fill="#7E8CBA" />
<TextInput secureTextEntry={true} placeholder="Contraseña" style={styles.input} 
           placeholderTextColor="#8E9AC3" name="password" 
           value={data.password}
           onChange={(evt)=>onChangeDataHandler(evt, 'password')}
           
/>
</View>
<TouchableOpacity >
<View style={styles.botoncontenedor}>
    <Button title="Iniciar Sesión" type="" style={styles.boton} color="white" onPress={()=>onPressLogin()} />
  </View>
</TouchableOpacity>

</View>

           </SafeAreaView>

}



export default LoginScreen;