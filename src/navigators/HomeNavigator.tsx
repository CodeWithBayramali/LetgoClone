import { View } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import { TouchableOpacity, Image, TextInput, Text, SafeAreaView, Platform } from "react-native";
import CategoryFilterScreen from "../screens/CategoryFilterScreen";
import { FontAwesome5, Ionicons,Entypo } from "@expo/vector-icons";
import ProductDetailsScreen from "../screens/ProductDetailsScreen";

import { getFocusedRouteNameFromRoute, useNavigation } from "@react-navigation/native";

const Stack = createStackNavigator();

const MainHeaderComponent = () => {

  return (
    <SafeAreaView
      style={{
        flexDirection: "row",
        alignItems: "center",
        width: "90%",
        marginHorizontal: "5%",
        marginBottom: 10,
        paddingTop: Platform.OS === "android" ? 30 : 0,
      }}
    >
      <TouchableOpacity>
        <Image
          style={{ width: 38, height: 38, borderRadius: 50 }}
          source={{ uri: "https://tr.web.img4.acsta.net/r_1280_720/newsv7/21/12/01/11/39/2363164.jpg" }}
        />
      </TouchableOpacity>
      <TextInput
        style={{
          backgroundColor: "#e5e5e5",
          flex: 1,
          marginHorizontal: 10,
          height: 45,
          borderRadius: 10,
          paddingLeft: 10,
        }}
        placeholder="Ara"
      />
      <Text style={{ color: "#FF184D", fontSize: 18 }}>Filtrele</Text>
    </SafeAreaView>
  );
};

const MainCateogryComponent = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView
      style={{
        flexDirection: "row",
        alignItems: "center",
        width: "90%",
        marginHorizontal: "5%",
        marginBottom: 10,
        paddingTop: Platform.OS === "android" ? 30 : 0,
      }}
    >
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <FontAwesome5 name="arrow-left" size={24} color="#989898" />
      </TouchableOpacity>
      <TextInput
        style={{
          backgroundColor: "#e5e5e5",
          flex: 1,
          marginHorizontal: 10,
          height: 45,
          borderRadius: 10,
          paddingLeft: 10,
        }}
        placeholder="Ara"
      />
      <Text style={{ color: "#FF184D", fontSize: 18 }}>Filtrele (1)</Text>
    </SafeAreaView>
  );
};

const MyStack = ({navigation,route}) => {

  const tabHiddenRoutes =["ProductDetails"];

  React.useLayoutEffect(()=> {
    const routeName = getFocusedRouteNameFromRoute(route);
    if(tabHiddenRoutes.includes(routeName)){
      navigation.setOptions({tabBarStyle:{display:'none'}})
    }else{
      navigation.setOptions({tabBarStyle:{display:'true'}})
    }
  })

  return (
    <Stack.Navigator>
      <Stack.Screen options={{ header: () => <MainHeaderComponent /> }} name="Home" component={HomeScreen} />
      <Stack.Screen
        options={{ header: () => <MainCateogryComponent /> }}
        name="CategoryFiltering"
        component={CategoryFilterScreen}
      />
      <Stack.Screen
        options={{
          headerTransparent: true,
          headerTitle:()=> (null),
          headerRight: () => (
            <View
              style={{
                backgroundColor: "rgba(0,0,0,0.5)",
                width: 36,
                height: 36,
                borderRadius: 50,
                flexDirection: "row",
                marginRight: 15,
                padding: 2,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Ionicons name="ios-arrow-redo-sharp" size={28} color="#FEFDFC" />
            </View>
          ),
          headerLeft: () => (
            <TouchableOpacity
              style={{
                backgroundColor: "rgba(0,0,0,0.5)",
                width: 36,
                height: 36,
                borderRadius: 50,
                flexDirection: "row",
                marginLeft: 15,
                padding: 2,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Entypo onPress={()=> navigation.goBack() } name="cross" size={28} color="#FEFDFC" />
            </TouchableOpacity>
          ),
        }}
        name="ProductDetails"
        component={ProductDetailsScreen}
      />
    </Stack.Navigator>
  );
};

export default function HomeNavigator({navigation,route}){
  return <MyStack navigation={navigation} route={route} />
}
