import { View, Text, ImageBackground, StyleSheet, FlatList } from 'react-native'
import { useRoute, useNavigation } from '@react-navigation/native'
import React, { useEffect } from 'react'
import bg from "../../assets/images/BG.png"
import Message from '../components/Message'
import messages from "../../assets/data/messages.json"
import InputBox from '../components/InputBox'

const ChatScreen = () => {

    const route = useRoute()
    const navigation = useNavigation()

    useEffect(() => {
        navigation.setOptions({ title: route.params.name })
    }, [route.params.name])
    return (
        <ImageBackground
            style={styles.bg}
            source={bg}
        >
            <FlatList
                data={messages}
                renderItem={({ item }) => <Message message={item} />}
                style={styles.list}
            />
            <InputBox />
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    bg: {
        flex: 1
    },
    list: {
        padding: 10
    }
})

export default ChatScreen