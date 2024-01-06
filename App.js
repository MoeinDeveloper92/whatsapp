import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ChatListitem from './src/components/ChatListItem';
import hero from "./assets/images/hero.jpg"

const chat = {
  id: "1",
  user: {
    image: hero,
    name: "Moein Berlin"
  },
  lastMessage: {
    text: "where are you Moein?",
    createdAt: "07:30"
  }
}


export default function App() {
  return (
    <View style={styles.container}>
      <ChatListitem
        chat={chat}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
