import { View, Text } from "react-native";
import React from "react";
import { Product } from "../../models/index";
import styles from "../MainProducts/styles";
import { AntDesign } from "@expo/vector-icons";
import FavoriteProductItem from "../FavoriteProductItem";

type mainProductsProps = {
  mainProducts: Product[];
  header: string;
  filtered: boolean;
};

const MainProducts = ({ mainProducts, header, filtered }: mainProductsProps) => {
  return (
    <View style={styles.mainProductContainer}>
      <View style={styles.mainProductsTitle}>
        <Text style={styles.leftText}>{header}</Text>
        {filtered && (
          <View style={styles.rightContent}>
            <Text style={styles.rightContentText}>Düzelt</Text>
            <AntDesign name="right" size={14} color="#F24E61" />
          </View>
        )}
      </View>

      <View style={styles.listContainer}>
        {mainProducts.map((item) => {
          return <FavoriteProductItem key={item.id} prodType="main" product={item} />;
        })}
      </View>
    </View>
  );
};

export default MainProducts;
