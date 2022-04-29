import { View, Text } from "react-native";
import React from "react";
import { FontAwesome, AntDesign, MaterialIcons } from "@expo/vector-icons";

const DetailTextBox = ({ price, name, description }: { price: number; name: string; description?: string }) => {
  return (
    <View>
      <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <FontAwesome name="turkish-lira" size={24} />
          <Text style={{ fontSize: 38, fontWeight: "bold" }}>{price}</Text>
        </View>
        <View
          style={{
            width: 46,
            height: 46,
            backgroundColor: "#F9F9F9",
            alignItems: "center",
            borderRadius: 50,
            justifyContent: "center",
          }}
        >
          <AntDesign name="heart" size={30} color="#9E9E9E" />
        </View>
      </View>
      <Text style={{ fontSize: 22, fontWeight: "600", marginTop: 6 }}>{name}</Text>

      <View style={{marginTop:30,flexDirection:'row',justifyContent:'space-between'}}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <MaterialIcons name="local-fire-department" size={24} color="#FF3E55" />
          <Text style={{ color: "#FF3E55",marginLeft:3 }}>58 dk</Text>
        </View>
        <View style={{flexDirection:'row',alignItems:'center',backgroundColor:'#F9F9F9',borderRadius:20,paddingHorizontal:5}}>
          <AntDesign name="eye" size={24} color="#9E9E9E" />
          <Text style={{marginLeft:5,color:"#9E9E9E"}}>14</Text>
        </View>
      </View>
      <Text style={{marginTop:20,fontSize:15}}>{description}</Text>
    </View>
  );
};

export default DetailTextBox;
