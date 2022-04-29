import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { Message } from "../../../models";
import styles from "../../../components/Chat/MessageItem/styles";
import { FontAwesome5,MaterialCommunityIcons } from "@expo/vector-icons";

type messageItemProps = {
  item: Message;
};

const index = ({ item }: messageItemProps) => {
  return (
    <TouchableOpacity key={item.id} style={styles.messageCard}>
      <View>
        <Image source={{ uri: item.image }} style={styles.uriImage} />
        <View style={styles.imageBadge}>
          <Text style={{ color: "white", fontWeight: "bold" }}>{item.sellerName.charAt(0).toUpperCase()}</Text>
        </View>
      </View>
      <View style={{ marginLeft: 20, flex: 1 }}>
        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
          <Text style={{ fontWeight: "bold", fontSize: 15 }}>
            {item.productName.length > 15 ? item.productName.substring(0, 30) + "..." : item.productName}
          </Text>
          <Text style={{ color: "#8B8B8B" }}>+1 ay</Text>
        </View>
        <Text style={{ marginTop: 7, fontSize: 15 }}>{item.sellerName}</Text>
        {item.situation === "Satıldı" ? (
          <View style={{ flexDirection: "row", alignItems: "center", marginTop: 10 }}>
            <FontAwesome5 name="times-circle" size={16} style={{ marginRight: 9 }} color="#A0A0A0" />
            <Text style={{ fontSize: 15, color: "#777777" }}>Artık Mevcut Değil</Text>
          </View>
        ) : (
          <View style={{ flexDirection: "row", alignItems: "center", marginTop: 10 }}>
            <MaterialCommunityIcons name="currency-usd-circle" size={20} style={{ marginRight: 5 }} color="#F24E61" />
            <Text style={{ fontSize: 15, color: "#F24E61" }}>Satıldı</Text>
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default index;
