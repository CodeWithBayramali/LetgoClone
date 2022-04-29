import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import RootNavigator from './src/navigators/RootNavigator';

export default function App() {

  return (
   <NavigationContainer>
     <RootNavigator />
     <StatusBar style='auto' />
   </NavigationContainer>
   
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop:'15%'
  },
});
