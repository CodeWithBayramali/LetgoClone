import { View, Text, Image } from "react-native";
import React from "react";
import { AntDesign, FontAwesome, Feather } from "@expo/vector-icons";

const SellerProfile = ({ averageRating }: { averagaRating: number }) => {
  return (
    <View style={{ marginTop: 20,flexDirection:'row',alignItems:'center',justifyContent:'space-between' }}>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <View>
          <Image
            style={{ width: 56, height: 56, borderRadius: 50 }}
            source={{ uri: "https://tr.web.img4.acsta.net/r_1280_720/newsv7/21/12/01/11/39/2363164.jpg" }}
          />
          <AntDesign
            name="checkcircle"
            size={15}
            color="#A6CC71"
            style={{ position: "absolute", bottom: -3, left: 40 }}
          />
        </View>
        <View style={{ marginLeft: 10 }}>
          <Text style={{ fontSize: 16, fontWeight: "600" }}>AliD</Text>
          <View style={{ flexDirection: "row", paddingTop: 3 }}>
            {[0, 0, 0, 0, 0].map((item, i) => (
              <FontAwesome
                key={i}
                name="star"
                size={17}
                style={{ marginRight: 2 }}
                color={i < Math.floor(averageRating) ? "#FFD200" : "#DFDFDF"}
              />
            ))}
          </View>
        </View>
      </View>
      <Feather name="chevron-right" size={28} color="gray" />
    </View>
  );
};

export default SellerProfile;
