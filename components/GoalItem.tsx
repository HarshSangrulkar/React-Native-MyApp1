import { ScrollView, StyleSheet, Text, View } from "react-native"
//import GoalInput from "./GoalInput";

interface GoalItemProps {
    text: string;
}
const GoalItem = ({ text }: GoalItemProps) => {
    return (
        <View style={styles.goalItem}>
            <Text style={styles.goalText}>{text}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    goalItem: {
        margin: 5,
        padding: 10,
        backgroundColor: "purple",
        borderRadius: 5,
    },
    goalText: {
        color: "white",
        fontSize: 16,
    },
})

export default GoalItem;