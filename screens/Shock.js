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
  TouchableOpacity
} from "react-native";
import * as Font from 'expo-font';
import BurgerMenu from './../src/components/BurgerMenu'
import styles from './../Styles'
import { Icon } from 'react-native-eva-icons';


class Shock extends React.Component {
  static navigationOptions = { 
    title: '',
    headerShown: false,

  };
  constructor(props) {
    super(props)
    this.state = {
      fontsLoaded: false
    }

  }

  componentDidMount() {
    this._loadAssetAsync()
  }
    onPress = () => {
    alert ('fawfaw') 
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

      <View style={styles.container}>  
      <View style={ styles.headerWrapper }>
          <View style={styles.navigation}>
           <TouchableOpacity onPress={() => {navigate('HomeScreen')}}>
           <Icon name="arrow-ios-back" width={30} height={30} fill="#14132A" />
           </TouchableOpacity>
            <View>
              <Image source={require('./../assets/Img/Avatar.png')} style={styles.avatar} />
            </View>
          </View>

          <View style={ styles.greatingWrapperPolizas }>

            <Text style={ styles.dayWrapper1 }>Me choqué</Text>
        
          </View>
          <View style={ styles.menuWrapperPago }>
          <View style={styles.header_SearchWrapper}>
                <Icon name="search" width={20} height={20} fill="#7E8CBA" />
                <TextInput placeholder="Ingresa la placa del vehículo" style={styles.header_SearchInput} placeholderTextColor="#8E9AC3" />
              </View>
          </View>
        </View>
      <ScrollView style={styles.scrollView}>
    

       
      </ScrollView>
      
        
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

export default Shock;