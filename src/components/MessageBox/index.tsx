import { View, Text, ScrollView, TextInput, Dimensions } from "react-native";
import React, { useState } from "react";

const { width, height } = Dimensions.get("window");

const MessageBox = () => {
  const [messages, setMessages] = useState<string[]>([
    "Hala Satılık mı ?",
    "Fiyatta pazarlık payı var mı?",
    "Ne durumda?",
  ]);
  return (
    <View
      style={{
        position: "absolute",
        bottom: 0,
        width: "100%",
        height: height * 0.16,
        shadowColor: "gray",
        backgroundColor: "white",
        shadowOpacity: 0.4,
      }}
    >
      <View>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} bounces={true} style={{marginTop:16}}>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          {messages.map((item, index) => (
            <View
              key={index}
              style={{
                marginHorizontal: 5,
                borderRadius: 20,
                padding: 10,
                backgroundColor: "#FF3E55",
                height: 40,
                alignItems: "center",
              }}
            >
              <Text style={{ color: "white" }}>{item}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
      </View>
      <View style={{ flexDirection: "row", alignItems: "center",marginTop:13,marginLeft:19 }}>
        <TextInput style={{height:45,backgroundColor:'#F5F5F5',flex:1,borderRadius:5,paddingHorizontal:10}} value="Hala müsait mi?" />
        <Text style={{marginHorizontal:15,fontSize:18,fontWeight:'bold',color:'#FF3E55'}}>Gönder</Text>
      </View>
    </View>
  );
};

export default MessageBox;
