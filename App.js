import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Login from './screens/Login.js';
import HomeScreen from './screens/HomeScreen.js';
import Pays from './screens/Pays.js';
import Insurance from './screens/Insurance.js';
import Request from './screens/Request.js';
import Shock from './screens/Shock.js';



const MainNavigator = createStackNavigator({
  Login: {screen: Login},
  HomeScreen: {screen: HomeScreen},
  Pays: {screen: Pays},
  Insurance: {screen: Insurance},
  Request: {screen: Request},
  Shock: {screen: Shock}
});

const App = createAppContainer(MainNavigator);

export default App;