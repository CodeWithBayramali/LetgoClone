import { View, Text } from "react-native";
import React from "react";
import { MaterialCommunityIcons, FontAwesome5 } from "@expo/vector-icons";

const MessageNotification = () => {
  return (
    <View
      style={{
        height: 45,
        backgroundColor: "#2C2C2C",
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "row",
        padding:5,
        marginBottom:10
      }}
    >
      <View style={{ flexDirection: "row",alignItems:'center' }}>
        <MaterialCommunityIcons name="message-processing" size={24} color="#757575" />
        <Text style={{ color: "white",marginLeft:5 }}>Mesaj Bildirimlerini Aç</Text>
      </View>
      <FontAwesome5 name="chevron-right" size={22} style={{marginRight:10}} color="#969696" />
    </View>
  );
};

export default MessageNotification;
