import { View, Text, StyleSheet } from "react-native"
import dayjs from "dayjs"
import relativeTime from "dayjs/plugin/relativeTime"
dayjs.extend(relativeTime)

const Message = ({ message }) => {
    //we need to ensure whio sends message,and differntiate them
    const isMyMessage = () => {
        return message.user.id === "u1"
    }
    return (
        <View style={[styles.container, {
            backgroundColor: isMyMessage() ? "#Dcf8c5" : 'white',
            alignSelf: isMyMessage() ? "flex-end" : "flex-start"
        }]}>
            <Text>{message.text}</Text>
            <Text style={styles.time}>{dayjs(message.createdAt).fromNow(true)}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        maxWidth: '80%',
        marginVertical: 5,
        padding: 10,
        borderRadius: 10
    },
    time: {
        color: 'gray',
        alignSelf: 'flex-end'
    }
})

export default Message