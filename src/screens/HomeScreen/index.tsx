import { ScrollView } from "react-native";
import React, { useEffect, useState } from "react";

import MessageNotification from '../../components/MessageNotification'
import FavoriteProducts from '../../components/FavoriteProducts'
import MainProducts from '../../components/MainProducts'
import CategoryFilter from '../../components/CategoryFilter'

// Data IMPORT
import getproducts from "../../../assets/products";
import { Product } from "../../models";

export default function HomeScreen() {
  const [products, setProducts] = useState<Product[]>([]);
  useEffect(() => {
    setProducts(getproducts);
  }, []);

  return (
   <ScrollView style={{ backgroundColor:'white',height:'100%' }}>
     <MessageNotification />
     <CategoryFilter />
      <FavoriteProducts product={products} />  
      <MainProducts mainProducts={products} header="Pendik" filtered={true} />
   </ScrollView>
  );
}
