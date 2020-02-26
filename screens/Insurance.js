import React, { Component } from "react";
import { 
  View,
  Text,
  SafeAreaView,
  Image,
  ScrollView,
  Button,
  Alert,
  StyleSheet,
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
          <Text style={styles.cardTextTitle}>{title}</Text>
        </View>
      </View>
      <View style={ [styles.cardBorderBottom, {backgroundColor: color, width: `${progress}`}] }></View>
    </View>
  )
}

class Insurance extends React.Component {
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
            <Text style={ styles.dayWrapper }>Mis pólizas</Text>
            <Text style={ styles.dateWrapper }>Encuentra todas tus pólizas</Text>
          </View>
          <View style={ styles.menuWrapperPoliza }>
          </View>
        </View>
      <ScrollView style={styles.scrollView}>
        <Card 
          color="#82E0AA"
          image={require('./../assets/Img/carro1.png')}
          title="Mis seguros de automóvil"
          progress="100%"
          date="" />

        <Card 
          color="#2984FC"
          image={require('./../assets/Img/salud.png')}
          title="Mis seguros en salud"
          progress="100%"
          date="" />

        <Card 
          color="#FF2323"
          image={require('./../assets/Img/casa.png')}
          title="Mis seguros para el hogar"
          progress="100%"
          date=""
          style={styles.scroll} />
      </ScrollView>
      
        <View style={styles.bottomNavigation}>
           <TouchableOpacity onPress={() => {navigate('HomeScreen')}}>
          <View style={styles.bottomMenuItem}>
            <Icon name="grid" width={24} height={24} fill="#F2F6FF" />        
          </View>
           </TouchableOpacity>
          <View style={[styles.bottomMenuItem, styles.bottomMenuItemActive]}>
            <Icon name="shield" width={24} height={24} fill="#14132A" />
            <Text style={styles.bottomMenuItemText}>Pólizas</Text>
          </View>
      
          <View style={styles.bottomMenuItem}>
            <Icon name="heart" width={24} height={24} fill="#F2F6FF" />
          </View>

          <View style={styles.bottomMenuItem}>
            <Icon name="settings-2" width={24} height={24} fill="#F2F6FF" />
          </View>
        </View>
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

export default Insurance;