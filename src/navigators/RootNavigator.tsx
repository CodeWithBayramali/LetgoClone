import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeNavigator from "./HomeNavigator";
import { Foundation, Ionicons, MaterialCommunityIcons, AntDesign, FontAwesome } from "@expo/vector-icons";
import PostNavigator from "./PostNavigator";
import SohbetNavigator from "./SohbetNavigator";

const Tab = createBottomTabNavigator();

const RootNavigator = () => {
  const CustomTabBarButton = ({ children }) => {
    return (
      <TouchableOpacity
        style={{
          backgroundColor: "#F23F5A",
          width: 60,
          height: 60,
          borderRadius: 50,
          alignItems: "center",
          justifyContent: "center",
          borderWidth: 3,
          borderColor: "white",
          marginTop: -18,
        }}
      >
        <FontAwesome name="camera" size={24} color="white" />
        <Text style={{ color: "white" }}>Sat</Text>
      </TouchableOpacity>
    );
  };

  return (
    <Tab.Navigator
      initialRouteName="Ana Sayfa"
      screenOptions={{
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: false,
        tabBarActiveTintColor: "#F24E61",
        tabBarInactiveTintColor: "#959595",
        headerShown: false,
        tabBarStyle: {
          height: 80,
        },
      }}
    >
      <Tab.Screen
        name="Ana Sayfa"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ color }) => <Foundation name="home" size={28} color={color} />,
        }}
      />

      <Tab.Screen
        name="Bildirimler"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <View>
              <Ionicons name="notifications" size={28} color={color} />
              <View
                style={{
                  width: 16,
                  height: 16,
                  borderRadius: 50,
                  backgroundColor: "#F24E61",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  position: "absolute",
                  top: -4,
                  right: -6,
                }}
              >
                <Text style={{ fontSize: 12, color: "white" }}>2</Text>
              </View>
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="Sat"
        component={HomeNavigator}
        options={{
          tabBarButton: (props) => <CustomTabBarButton {...props} />,
        }}
      />

      <Tab.Screen
        name="Sohbet Screen"
        component={SohbetNavigator}
        options={{
          tabBarIcon: ({ color }) => <MaterialCommunityIcons name="message-processing" size={28} color={color} />,
        }}
      />

      <Tab.Screen
        name="Ilanlarım"
        component={PostNavigator}
        options={{
          tabBarIcon: ({ color }) => <AntDesign name="appstore1" size={28} color={color} />,
        }}
      />
    </Tab.Navigator>
  );
};

export default RootNavigator;
