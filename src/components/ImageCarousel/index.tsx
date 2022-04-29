import { View, Text, Image, FlatList, StyleSheet, Dimensions } from "react-native";
import React, { useState } from "react";
import styles from "./styles";

const { width } = Dimensions.get("window");

const ImageCarousel = ({ images }: { images: string[] }) => {

  const [activeIndex, setActiveIndex] = useState(0);

  const onViewRef = React.useRef((viewableItems) => {
    if (viewableItems.viewableItems.length > 0) {
      setActiveIndex(viewableItems.viewableItems[0].index || 0);
    }
  });

  const viewConfigRef = React.useRef({ viewAreaCoveragePercentThreshold: 50 });

  return (
    <View>
      <FlatList
        data={images}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        keyExtractor={()=> Math.random().toString()}
        snapToInterval={width}
        snapToAlignment={"center"}
        decelerationRate={"fast"}
        viewabilityConfig={viewConfigRef.current}
        onViewableItemsChanged={onViewRef.current}
        renderItem={({ item }) => <Image source={{ uri: item }} style={styles.carouselImage} />}
      />
      <View style={styles.dotView}>
        {
          images.map((image,index)=> (
            <View key={index} style={[styles.dot,{backgroundColor:index === activeIndex ? '#FFFFFD':'#CBCAD0'}]} />
          ))
        }
      </View>
    </View>
  );
};

export default ImageCarousel;
