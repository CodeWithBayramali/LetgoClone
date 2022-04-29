import { View, Text,TouchableOpacity,Alert } from "react-native";
import React from "react";
import { MaterialCommunityIcons, FontAwesome5, AntDesign, Entypo } from "@expo/vector-icons";

const SocialMediaContainer = (props) => {
  return (
    <View
      style={{
        backgroundColor: props.color,
        width: 40,
        height: 40,
        borderRadius: 20,
        alignItems: "center",
        justifyContent: "center",
        marginRight: 14,
      }}
    >
      {props.children}
    </View>
  );
};

const SocialMedias = () => {
  return (
    <View>
      <Text style={{marginTop:20,marginBottom:12,color:'#262626',fontWeight:'500'}}>
          Bu ilanı paylaş
      </Text>

      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <SocialMediaContainer color="#60E14A">
          <MaterialCommunityIcons name="chat" size={24} color="white" />
        </SocialMediaContainer>

        <SocialMediaContainer color="#56ACEE">
          <FontAwesome5 name="twitter" size={24} color="white" />
        </SocialMediaContainer>

        <SocialMediaContainer color="#5EBE48">
          <FontAwesome5 name="whatsapp" size={24} color="white" />
        </SocialMediaContainer>

        <SocialMediaContainer color="#7FAC53">
          <AntDesign name="link" size={24} color="white" />
        </SocialMediaContainer>

        <SocialMediaContainer color="#747474">
          <Entypo name="dots-three-horizontal" size={24} color="white" />
        </SocialMediaContainer>
      </View>
        <View style={{marginBottom:'5%',marginTop:'6%'}}>
            <TouchableOpacity onPress={()=> Alert.alert("Alert Title")} style={{borderWidth:1.2,borderColor:'#FF3E55',borderRadius:22,padding:12,alignItems:"center",justifyContent:'center'}}>
                    <Text style={{color:'#FF3E55',fontWeight:'bold',fontSize:16}}>İlanı Şikayet Et</Text>
            </TouchableOpacity>
        </View>
    </View>
  );
};

export default SocialMedias;
