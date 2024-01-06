import { View, Text, Image, StyleSheet } from "react-native"
import hero from "../../../assets/images/hero.jpg"
const ChatListitem = () => {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={hero} resizeMode="contain" />
            <View style={styles.content}>
                <View style={styles.row}>
                    <Text style={styles.name} numberOfLines={1} >Moein</Text>
                    <Text style={styles.subTitle}>8:30</Text>
                </View>
                <Text numberOfLines={2} style={styles.subTitle}>Where Are You?</Text>
            </View>
        </View>
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