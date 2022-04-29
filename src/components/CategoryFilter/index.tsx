import { ScrollView, Image, TouchableOpacity, Text } from "react-native";
import React ,{useState,useEffect}from "react";
import categoriesData from "../../../assets/categories";
import styles from "./styles";
import { Category } from "../../models";
import { useNavigation } from "@react-navigation/native";

const CategoryFilter = () => {

    const [categories,setCategories] = useState<Category[]>([])
    const navigation = useNavigation()
    useEffect(()=> {
        setCategories(categoriesData)
        return () => {
            setCategories([])
        }
    })

    return (
    <ScrollView 
    bounces={true} 
    horizontal={true} 
    showsHorizontalScrollIndicator={false} 
    style={styles.scrollStyle}>
      {
          categories.map((item:Category) => (
              <TouchableOpacity onPress={()=> navigation.navigate("CategoryFiltering",{category:item}) } key={item.id} style={styles.center}>
                  <Image source={item.src} style={styles.imageStyle} />
                  <Text style={{ fontSize:13, color:'#767575',fontWeight:'bold'}}>{item.name}</Text>
              </TouchableOpacity>
              ))
      }
    </ScrollView>
  );
};

export default CategoryFilter;
