import { View, Text, FlatList } from "react-native";
import React from "react";
import messageData from "../../../assets/messages";
import MessageItem from '../../components/Chat/MessageItem'

const ChatScreen = () => {
  return (
    <View style={{backgroundColor:'white',height:'100%'}}>
      <FlatList data={messageData} keyExtractor={(item)=> item.id} renderItem={({ item }) => <MessageItem  item={item} />} />
    </View>
  );
};

export default ChatScreen;
