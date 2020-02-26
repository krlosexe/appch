import { 
    StyleSheet,
  } from "react-native";

const fonts = {
    regular: {
      fontFamily: 'poppins-regular',
    },
    bold: {
      fontFamily: 'poppins-semibold',
    }
  }

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#F2F6FF',
      flex: 1
    },
      containerlogin: {
      backgroundColor: '#323255',
      flex: 1
    },
      statuslogin: {
      backgroundColor: '#323255',
      flex: 1
    },

  
    headerWrapper: {
      marginBottom: 30,    
    },
    header_SearchWrapper: {
        backgroundColor: '#F3F6FF',
        flexDirection: 'row',
        borderRadius: 5,
        padding: 10,
        marginTop: 15
    },
    inputFondo: {
        backgroundColor: 'white',
        flexDirection: 'row',
        borderRadius: 5,
        padding: 10,
        marginTop: 15,
        marginHorizontal: 40,
        marginLeft:40,
        marginRight:40,
    },
    
    header_SearchInput: {
        ...fonts.medium,
        marginLeft: 10,
        fontSize: 16,
    },
     input: {
        ...fonts.medium,
        marginLeft: 10,
        fontSize: 16,
    },
    navigation: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: 20,
      paddingTop: 20,
      backgroundColor: '#fff'
    },
     botonpoliza: {
      textAlign: 'center',
      borderRadius:30,
      backgroundColor:'red',
      height:40, 
      width:220
    },
      botoncontenedor: {
      marginTop:20,
      borderRadius:5,
      backgroundColor:'#FCAB00',
        marginLeft:40,
        marginRight:40,
     
    },
    boto:{
     textAlign: 'center', 
    },

    logocontenedor: {
    alignItems: 'center'
    },

    avatar: {
      height: 40,
      width: 40,
      resizeMode: 'contain',
    },
    textotitulo: {
      ...fonts.bold,
      color: 'white',
      fontSize: 24,
      textAlign: 'center'
    },
     textodescripcion: {
      ...fonts.regular,
      color: 'white',
      fontSize: 16,
      textAlign: 'center'
    },
       logo: {
      height: 220,
      width: 220,
      resizeMode: 'contain',
    
    },
      lottie: {
      alignItems:'center',

    },
    greatingWrapper: {
      paddingVertical: 30,
      paddingHorizontal: 20,
      backgroundColor: '#fff',
      paddingBottom: 40
    },
    greatingWrapperPolizas: {
      paddingVertical: 30,
      paddingHorizontal: 20,
      backgroundColor: '#fff',
      paddingBottom: 10
    },
    nameWrapper: {
      ...fonts.regular,
      color: '#808080'
    },
    dayWrapper: {
      ...fonts.bold,
      color: '#14132A',
      fontSize: 24
    },
        dayWrapper1: {
      ...fonts.bold,
      color: '#14132A',
      fontSize: 24,
      textAlign:'center'
    },
    dateWrapper: {
      ...fonts.regular,
      color: '#808080'
    },
    dateWrapperPagos: {
      ...fonts.regular,
      color: '#808080',
      textAlign: 'left',
      paddingHorizontal:20,
      paddingBottom:25
    },
    menuWrapper: {
      backgroundColor: '#fff',
      paddingHorizontal: 10,
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      paddingBottom: 40,
      borderBottomLeftRadius: 100,
      borderBottomRightRadius: 100
    },
     menuWrapperPoliza: {
      backgroundColor: '#fff',
      paddingHorizontal: 10,
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      paddingBottom: 20,
      borderBottomLeftRadius: 100,
      borderBottomRightRadius: 100
    },
      menuWrapperPago: {
      backgroundColor: '#fff',
      paddingHorizontal: 10,
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      paddingBottom: 40,
      borderBottomLeftRadius: 100,
      borderBottomRightRadius: 100
    },
    menuItem: {
      ...fonts.regular,
      fontSize: 12,
      paddingHorizontal: 18,
      color: '#808080',
      paddingVertical: 10
    },
    menuItemActive: {
      ...fonts.bold,
      color: '#14132A',
      borderColor: '#eee',
      borderWidth: 1,
      borderRadius: 5,
    },

    cardWrapper: {
        marginHorizontal: 20,
        marginBottom: 20,
    },
    cardBodyHome: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        paddingHorizontal: 15,
        paddingVertical: 15,
        borderRadius: 15,
        

    },
    cardBody: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        paddingHorizontal: 15,
        paddingVertical: 15,
        borderRadius: 15,
        borderBottomWidth: 5,
        borderBottomColor: '#808080'
    },
    cardLogoBackground: {
        backgroundColor: '#F2F6FF',
        paddingHorizontal: 10,
        paddingVertical: 10,
        borderRadius: 15,
        marginRight: 15
    },
    cardLogo: {
        height: 43,
        width: 43,
        resizeMode: 'contain'
    },
    cardTextTitle: {
        ...fonts.bold,
        color: '#14132A',
        fontSize: 15
    },
     cardTextTitle1: {
        ...fonts.bold,
        color: '#14132A',
        fontSize: 15,
        alignItems: 'center',
        textAlign: 'center'

    },
    cardTextDate: {
        ...fonts.regular,
        color: '#808080',
    },
    cardBorderBottom: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '50%',
        height: 5,
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15
    },

    bottomNavigation: {
        backgroundColor: '#fff',
        flexDirection: 'row',
        position: 'absolute',
        bottom: 0,
        width: '100%',
        paddingHorizontal: 20,
        paddingVertical: 20,
        paddingTop: 30,
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },
    bottomMenuItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 20
    },
    bottomMenuItemActive: {
        backgroundColor: '#F2F6FF'
    },
    bottomMenuItemText: {
        ...fonts.regular,
        color: '#14132A',
        marginLeft: 10
    }

});

export default styles;