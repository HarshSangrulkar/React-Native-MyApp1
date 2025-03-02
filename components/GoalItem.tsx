import { ScrollView, StyleSheet, Text, View, Pressable } from "react-native"
//import GoalInput from "./GoalInput";

interface GoalItemProps {
    text: string;
    id: string;
    onDeleteItem: (id: string) => void
}
const GoalItem = ({ text, id, onDeleteItem }: GoalItemProps) => {
    return (
        <Pressable onPress={() => onDeleteItem(id)}>
            <View style={styles.goalItem}>
                <Text style={styles.goalText}>{text}</Text>
            </View>
        </Pressable>
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

/*
for deleting a segment
web: onClick()
app: old way: touchable, touchableNative, touchableOpacity
app: new way: pressable
*/