import { View, ScrollView, Text, Image } from "react-native";
import React, { useState, useEffect } from "react";
import filteringsData from "../../../assets/filterings";
import { Category, Filtering } from "../../models";
import styles from "./styles";
import { Feather } from "@expo/vector-icons";

const FilteringCategory = ({ category }: { category: Category }) => {
  const [filterings, setFilterings] = useState<Filtering[]>([]);

  useEffect(() => {
    setFilterings(filteringsData);
    return () => {
      setFilterings([]);
    };
  }, []);

  return (
    <ScrollView style={styles.scrollMain} horizontal={true} bounces={true} showsHorizontalScrollIndicator={false}>

      <View key={category.id} style={styles.mainViewCategory}>
        <Image style={styles.categoryImage} source={category.src} />
        <Text style={{color:'white',fontWeight:'600'}}>{category.name}</Text>
        <Feather style={{ marginLeft: 4 }} name="chevron-down" size={20} color="#919191" />
      </View>

      {filterings.map((item: Filtering) => (
        <View key={item.id} style={styles.mainView}>
          <Text style={{fontWeight:'600',color:'#424242'}}>{item.name}</Text>
          <Feather style={{ marginLeft: 4 }} name="chevron-down" size={20} color="#919191" />
        </View>
      ))}

    </ScrollView>
  );
};

export default FilteringCategory;
