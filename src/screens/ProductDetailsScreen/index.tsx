import { View, Text, ScrollView } from "react-native";
import React, { useState } from "react";
import { Product } from "../../models";
import ImageCarousel from "../../components/ImageCarousel";
import DetailTextBox from "../../components/DetailsTextBox";
import SellerProfile from "../../components/SellerProfile";
import MappingComponent from "../../components/MappingComponent";
import SocialMedias from "../../components/SocialMedias";
import MessageBox from "../../components/MessageBox";

const ProductDetailsScreen = (props) => {
  const [product, setProduct] = useState<Product>(props.route.params.product);

  return (
    <View>
      <ScrollView style={{ backgroundColor: "white",marginBottom:140 }}>
      {/* Image Cursor */}
      <ImageCarousel images={product.images} />
      <View style={{paddingHorizontal:20,paddingVertical:14}}>
        <DetailTextBox price={product.price} name={product.name} description={product.description} />
        <SellerProfile averageRating={product.rating} />
        <MappingComponent />
        <SocialMedias />
      </View>
    </ScrollView>
    <MessageBox />
    </View>
    
  );
};

export default ProductDetailsScreen;
