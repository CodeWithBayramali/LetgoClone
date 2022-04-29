import { TouchableOpacity, View, Image, Text } from "react-native";
import styles from "./styles";
import React from "react";
import { Product } from "../../models";
import { Foundation } from "@expo/vector-icons";
import {useNavigation} from '@react-navigation/native'

type productProps = {
  product: Product;
  prodType: string;
};

const FavoriteProductItem = ({ product, prodType }: productProps) => {

  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={()=> navigation.navigate("ProductDetails",{product:product})} style={prodType === "favorite" ? styles.favorite : styles.main}>
      <View style={prodType === "favorite" ? styles.favoriteView : styles.mainView}>
        <Image
          style={prodType === "favorite" ? styles.favoriteImage : styles.mainImage}
          source={{ uri: product.image }}
          resizeMode="stretch"
        />
        {prodType === "favorite" && parseInt(product.id)%2 ==1 && (
          <View style={styles.labeledFav}>
            <Text style={{ fontSize: 9, fontWeight: "500" }}>Öne Çıkan</Text>
          </View>
        )}
        <TouchableOpacity>
          <Foundation style={{ position: "absolute", right: 8, bottom: 5 }} name="heart" size={24} color="white" />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

export default FavoriteProductItem;
