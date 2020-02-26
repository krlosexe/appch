import React, { Component } from "react";
import { Linking } from 'expo';
import { 
  View,
  Text,
  SafeAreaView,
  Image,
  ScrollView
} from "react-native";

import * as Font from 'expo-font';
import BurgerMenu from '././src/components/BurgerMenu'
import styles from '././Styles'
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
          <Text style={styles.cardTextDate}>{date}</Text>
        </View>
      </View>
      <View style={ [styles.cardBorderBottom, {backgroundColor: color, width: `${progress}`}] }></View>
    </View>
  )
}

class App extends Component {
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
      'poppins-regular': require('././assets/Fonts/Poppins-Regular.ttf'),
      'poppins-semibold': require('././assets/Fonts/Poppins-SemiBold.ttf'),
    });

    this.setState({ fontsLoaded:true })
  }

  MainView() {
    return (
      <View style={styles.container}>  
        <View style={ styles.headerWrapper }>
          <View style={styles.navigation}>
            <BurgerMenu />
            <View>
              <Image source={require('././assets/Img/Avatar.png')} style={styles.avatar} />
            </View>
          </View>

          <View style={ styles.greatingWrapper }>
            <Text style={ styles.nameWrapper }>Hola, Hebert Noreña!</Text>
            <Text style={ styles.dayWrapper }>Muy buenos días</Text>
            <Text style={ styles.dateWrapper }>03 enero 2020</Text>
          </View>

          <View style={ styles.menuWrapper }>
            <Text style={[styles.menuItem, styles.menuItemActive]}>Me choqué</Text>
            <Text style={[styles.menuItem, styles.menuItemActive]}>Citas médicas</Text>
            <Text style={[styles.menuItem, styles.menuItemActive]}>Mi SOAT</Text>
          </View>
        </View>
      <ScrollView style={styles.scrollView}>
        <Card 
          color="#2984FC"
          image={require('././assets/Img/tarjeta-de-debito.png')}
          title="Pagos en linea"
          progress="100%"
          date="Paga tu seguro en linea" />

        <Card 
          color="#FF2323"
          image={require('././assets/Img/pregunta.png')}
          title="Mis solicitudes"
          progress="100%"
          date="Realiza tus solicitudes" />

        <Card 
          color="#3160FF"
          image={require('././assets/Img/advertencia.png')}
          title="Reportar un problema"
          progress="100%"
          date="Genera un ticket"
          />
      </ScrollView>
        <View style={styles.bottomNavigation}>
          <View style={[styles.bottomMenuItem, styles.bottomMenuItemActive]}>
            <Icon name="grid" width={24} height={24} fill="#14132A" />
            <Text style={styles.bottomMenuItemText}>Inicio</Text>
          </View>

          <View style={styles.bottomMenuItem}>
            <Icon name="shield" width={24} height={24} fill="#F2F6FF" />
          </View>

          <View style={styles.bottomMenuItem}>
            <Icon name="heart" width={24} height={24} fill="#F2F6FF" />
          </View>

          <View style={styles.bottomMenuItem}>
            <Icon name="settings-2" width={24} height={24} fill="#F2F6FF"  />
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
    )
  }
}
export default App;