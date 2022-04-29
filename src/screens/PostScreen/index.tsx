import { View, Text, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import products from "../../../assets/products";
import { Product } from "../../models";
import FavoriteItem from "../../components/FavoriteItem";

const PostScreen = () => {
  const [favoriteProducts, setFavoriteProducts] = useState<Product[]>();
  const [headerText, setHeaderText] = useState<string[]>(["Favoriler", "Satıyor", "Süresi Dolmuş", "Satıldı"]);
  useEffect(() => {
    setFavoriteProducts(products);
    return () => {
      setFavoriteProducts([]);
    };
  }, []);

  return (
    <View style={{ padding: 13 }}>
      <FlatList
        data={favoriteProducts}
        showsVerticalScrollIndicator={false}
        stickyHeaderIndices={[0]}
        ListHeaderComponent={() => (
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: 15,
              backgroundColor: "#f1f1f1",
            }}
          >
            {headerText.map((item, index) => (
              <View
              key={index}
                style={{ paddingVertical: 10, borderBottomColor: "#FF3E55", borderBottomWidth: index === 0 ? 3 : 0 }}
              >
                <Text
                  style={{
                    color: index === 0 ? "#FF3E55" : "black",
                    fontSize: 17,
                    fontWeight: index === 0 ? "bold" : "400",
                  }}
                >
                  {item}
                </Text>
              </View>
            ))}
          </View>
        )}
        renderItem={({ item, index }) => <FavoriteItem key={index} product={item} />}
      />
    </View>
  );
};

export default PostScreen;
