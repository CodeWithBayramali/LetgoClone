import { View, Text, Dimensions } from "react-native";
import React from "react";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";

const { width, height } = Dimensions.get("window");

const MappingComponent = () => {
  return (
    <View>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={{ height: height * 0.18, borderRadius: 12, marginTop: 18 }}
        initialRegion={{
          latitude: 36.884804,
          longitude: 30.704044,
          latitudeDelta: 0,
          longitudeDelta: 0.5,
        }}
      />
      <View
        style={{
          height: height * 0.044,
          marginTop:-height*0.010,
          backgroundColor:'white',
          borderBottomLeftRadius: 12,
          borderBottomWidth: 0.3,
          borderRightWidth:0.3,
          borderLeftWidth:0.3,
          borderBottomRightRadius: 12,
          borderColor:'#a6a6a6'
        }}
      >
          <Text style={{padding:10}}>34890, Pendik</Text>
      </View>
    </View>
  );
};

export default MappingComponent;
