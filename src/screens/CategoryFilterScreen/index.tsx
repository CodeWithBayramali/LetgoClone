import { View, Text,ScrollView } from 'react-native'
import React,{useState,useEffect} from 'react'

import MessageNotification from '../../components/MessageNotification'
import MainProducts from '../../components/MainProducts'
import FilteringCategory from '../../components/FilteringCategory'

import getproducts from '../../../assets/products'
import { Category, Product } from '../../models';

const CategoryFilterScreen = (props) => {

    const [products, setProducts] = useState<Product[]>([]);
    const [category,setCategory] = useState<Category>(props.route.params.category);

    useEffect(() => {
      setProducts(getproducts);
    }, []);

  return (
    <ScrollView style={{ backgroundColor:'white',height:'100%' }}>
      <FilteringCategory category={category} />
        <MessageNotification />
        <MainProducts mainProducts={products} header="Arama Sonuçları (1041464)" filtered={false} />
    </ScrollView>
  )
}

export default CategoryFilterScreen