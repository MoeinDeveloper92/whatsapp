import { useState } from "react"
import { View, Text, StyleSheet, TextInput } from "react-native"
import { AntDesign, MaterialIcons } from "@expo/vector-icons"

const InputBox = () => {
    const [newMessage, setNewMessage] = useState("")


    const onSend = () => {
        console.warn("your message is", newMessage)
        setNewMessage("")
    }
    return (
        <View style={styles.container}>
            <AntDesign
                name="plus"
                size={24}
                color={"royalblue"}
            />


            {/* Text Input */}
            <TextInput
                style={styles.input}
                placeholder="type your message..."
                value={newMessage}
                onChangeText={(value) => setNewMessage(value)}
            />
            {/* Icon */}
            <MaterialIcons
                size={16}
                name="send"
                color={"white"}
                style={styles.send}
                onPress={onSend}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: 'whitesmoke',
        alignItems: 'center',
        padding: 5,
        paddingHorizontal: 10

    },
    input: {
        flex: 1,
        backgroundColor: 'white',
        padding: 5,
        borderRadius: 50,
        paddingHorizontal: 10,
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: 'lightgray',
        marginHorizontal: 10,
        fontSize: 16
    },
    send: {
        backgroundColor: 'royalblue',
        padding: 5,
        borderRadius: 15,
        overflow: 'hidden'
    }
})
export default InputBox