import { View, Text, Image, StyleSheet, Pressable } from "react-native"
import dayjs from "dayjs"
import relativeTime from "dayjs/plugin/relativeTime"
dayjs.extend(relativeTime)
import { useNavigation } from "@react-navigation/native"


const ChatListitem = ({ chat }) => {
    const navigation = useNavigation()
    return (
        <Pressable style={styles.container}
            onPress={() => navigation.navigate("Chat", { id: chat.id, name: chat.user.name })}
        >
            <Image style={styles.image} source={{ uri: chat.user.image }} resizeMode="contain" />
            <View style={styles.content}>
                <View style={styles.row}>
                    <Text style={styles.name} numberOfLines={1} >{chat.user.name}</Text>
                    <Text style={styles.subTitle}>{dayjs(chat.lastMessage.createdAt).fromNow(true)}</Text>
                </View>
                <Text numberOfLines={2} style={styles.subTitle}>{chat.lastMessage.text}</Text>
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginHorizontal: 10,
        marginVertical: 5,
        height: 70,


    },
    image: {
        width: 60,
        height: 60,
        borderRadius: 30,
        marginRight: 10
    },
    content: {
        flex: 1,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: 'lightgray'
    },
    row: {
        flexDirection: 'row',
        marginBottom: 5
    },
    name: {
        flex: 1,
        fontWeight: 'bold'
    },
    subTitle: {
        color: 'gray'
    }
})

export default ChatListitem