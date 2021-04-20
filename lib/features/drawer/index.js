// In App.js in a new project

import * as React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { createDrawerNavigator } from '@react-navigation/drawer';



function HomeScreen(props) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', fontSize:20}}>
      <Text>Home Screen</Text>
      <TouchableOpacity style={{marginTop:20, width:200, height:50, backgroundColor:'#ff5204', padding:10, alignItems: 'center', borderBottomEndRadius:5}} 
        onPress={() =>props.navigation.navigate('Profile')}>
         <Text style={{color:'#fff'}}>Ir a Perfil</Text>
      </TouchableOpacity>
    </View>
  );
}
function ProfileScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', fontSize:20}}>
      <Text>Perfil Screen</Text>
    </View>
  );
}
//const Stack = createStackNavigator();

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Profile" component={ProfileScreen} />
    </Drawer.Navigator>
    </NavigationContainer>
    
  );
}
export default MyDrawer;