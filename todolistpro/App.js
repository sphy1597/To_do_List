import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Button, Image, Linking } from 'react-native';
import { DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer'
import Home from './Screens/Home'
import CustomDrawerContent from './components/CustomDrawerContent'

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

export default function App() {
  
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Home"
        drawerPosition="right"
        drawerStyle={{
          backgroundColor: 'skyblue',
          width: 200
        }}
        drawerContentOptions={{
          activeTintColor: 'blue',
          activeBackgroundColor: 'lightblue'
        }}
         drawerContent={(props) => <CustomDrawerContent {...props} />}
      >
        <Drawer.Screen name="Home" component={StackScreen}
          options={
            {
              drawerIcon: () => (
                <Image
                source = {require('./assets/home.png')}
                style = {{width:30, height:30}}
                />
              )
            }
          }
        />
        
       
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

function StackScreen() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown : true,
        headerTitle: "home" 
      }}
    >
    <Stack.Screen name="Home" component={Home}
      options={{
                    headerShown: true,
                    headerTitle: "DnF Todo List"
                  }}
    />
      
     
    </Stack.Navigator>
  );
}