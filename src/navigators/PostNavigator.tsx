import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { TouchableOpacity, Image, TextInput, Text, SafeAreaView, Platform } from "react-native";
import {MaterialCommunityIcons,Ionicons} from '@expo/vector-icons'
import PostScreen from '../screens/PostScreen'

import { useNavigation } from "@react-navigation/native";


const Stack = createStackNavigator();


const PostNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen options={{ headerStyle: {
          backgroundColor:'#f1f1f1'
      },
      headerTitle:() => (
          <Text style={{fontWeight:'bold',fontSize:20}}>İlanlarım</Text>
      ),
      headerLeft:()=> (
        <MaterialCommunityIcons style={{marginLeft:15}} name="lightbulb-on" size={32} color="#919191" />
      ),
      headerRight:()=> (
        <Ionicons style={{marginRight:15}} name="ios-arrow-redo-sharp" size={32} color="#919191" />
      ),
      }} name="Post" component={PostScreen} />
    </Stack.Navigator>
  );
};

export default PostNavigator;
