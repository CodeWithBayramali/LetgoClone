import { View, Text, Image, Dimensions } from "react-native";
import React from "react";
import { Product } from "../../models";
import { FontAwesome, Ionicons } from "@expo/vector-icons";

type favoriteItemProps = {
  product: Product;
};

const { width, height } = Dimensions.get("window");

const FavoriteItem = ({ product }: favoriteItemProps) => {
  return (
    <View
      style={{
        padding: 14,
        borderColor: "#C9C9C9",
        borderWidth: 1,
        borderRadius: 10,
        marginBottom: 18,
        height: height * 0.18,
        shadowColor: "gray",
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          paddingBottom: 18,
          borderBottomWidth: 1.2,
          borderBottomColor: "#dcdee0",
        }}
      >
        <Image style={{ width: width * 0.17, height: width * 0.17, borderRadius: 8 }} source={{ uri: product.image }} />
        <View style={{ width: "75%", marginLeft: 12 }}>
          <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
            <View style={{ flexDirection: "row", justifyContent: "flex-start" }}>
              <FontAwesome name="turkish-lira" size={14} color="#black" />
              <Text style={{ fontWeight: "bold", fontSize: 14, marginLeft: 3 }}>{product.price}</Text>
            </View>
            <Ionicons name="ios-trash-sharp" size={24} color="#919191" />
          </View>
          <Text style={{ fontSize: 14, fontWeight: "500", color: "#646464", width: width * 0.6 }}>
            {product.description}
          </Text>
        </View>
      </View>
      <View style={{flexDirection:'row',justifyContent:'space-around',marginTop:18}}>
          <Text style={{color:'#7A7A7A',fontSize:17,fontWeight:'bold'}}>Paylaş</Text>
          <Text style={{color:'#FF3E55',fontSize:17,fontWeight:'bold'}}>Sohbet Et</Text>
      </View>
    </View>
  );
};

export default FavoriteItem;
