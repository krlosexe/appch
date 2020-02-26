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

const Card = function({image, title, date, color, progress}) {
  return (
    <View style={styles.cardWrapper}>
      <View style={[styles.cardBody, {borderBottomColor: `${color}8C`}]}>
        <View style={styles.cardLogoBackground}>
          <Image source={ image } style={styles.cardLogo} />
        </View>
        <View>
          <Text style={styles.cardTextTitle1}>{title}</Text>
        </View>
      </View>
      <View style={ [styles.cardBorderBottom, {backgroundColor: color, width: `${progress}`}] }></View>
    </View>
  )
}

class Pays extends React.Component {
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
            <Text style={ styles.dayWrapper1 }>Pagar en linea</Text>
          </View>
          <View style={ styles.menuWrapperPago }>
          <View style={styles.header_SearchWrapper}>
                <Icon name="search" width={20} height={20} fill="#7E8CBA" />
                <TextInput placeholder="Ingresa tu número de documento" style={styles.header_SearchInput} placeholderTextColor="#8E9AC3" />
              </View>
          </View>
        </View>
      <ScrollView style={styles.scrollView}>
       <View>
        <Text style={ styles.dateWrapperPagos}>Seguros pendientes de pago</Text>
       </View>

        <Card 
          color="#2984FC"
          image={require('./../assets/Img/logosura.png')}
          title="¡Pagar mi seguro!"
          progress="100%"
          date="" />

       
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

export default Pays;