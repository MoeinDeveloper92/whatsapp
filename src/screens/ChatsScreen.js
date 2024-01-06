import { View, Text, FlatList } from 'react-native'
import React from 'react'
import ChatListitem from '../components/ChatListItem'
import chats from "../../assets/data/chats.json"
const ChatsScreen = () => {
    return (
        <FlatList
            data={chats}
            renderItem={({ item }) => (
                <ChatListitem chat={item} />
            )}
        />
    )
}

export default ChatsScreen