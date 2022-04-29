import { View, Text, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import styles from "./styles";
import { AntDesign } from "@expo/vector-icons";
import FavoriteProductItem from "../../components/FavoriteProductItem/index";


export default function FavoriteProducts({product}) {

  return (
    <View style={styles.productContainer}>
      {/* Render Header */}
      <View style={styles.titleProducts}>
        <Text style={styles.topicTitle}>Vitrin İlanları</Text>
        <View style={styles.rightContent}>
          <Text style={styles.detailTitle}>Hepsini Gör</Text>
          <AntDesign name="right" size={14} color="#F24E61" />
        </View>
      </View>

      {/* Render Header Products */}

      <ScrollView bounces={true} showsHorizontalScrollIndicator={false} horizontal={true}>
        {product.map((item) => {
          return <FavoriteProductItem key={item.id} prodType="favorite" product={item} />;
        })}
      </ScrollView>
    </View>
  );
}
