import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import ChatScreen from '../screens/ChatScreen';
import {Octicons,Entypo} from '@expo/vector-icons'


const Stack = createStackNavigator();

const SohbetNavigator = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen options={{
          headerTitle:()=> (<Text style={{fontSize:16,fontWeight:'600'}}>Sohbet-Hepsi</Text>),
          headerRight:()=> (
            <View style={{flexDirection:'row',alignItems:'center',marginRight:24}}>
                <Octicons name='settings' style={{marginRight:24,color:'#939393'}} size={24} />
                <Entypo name='dots-three-horizontal' style={{color:'#939393'}} size={24} />
            </View>
          )
        }} name='Sohbet' component={ChatScreen} />
    </Stack.Navigator>
  )
}

export default SohbetNavigator;