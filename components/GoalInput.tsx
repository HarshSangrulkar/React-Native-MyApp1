import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"
import { useState } from "react";

interface GoalInputProps {
    onGoalAdd: (goalText: string) => void;
}

const GoalInput = ({ onGoalAdd }: GoalInputProps) => {
    const [goal, setGoal] = useState('');


    const goalInputHandler = (eneteredText: string) => {
        setGoal(eneteredText);
    }
    const addGoalHandler = () => {
        onGoalAdd(goal);
        setGoal("");
    }
    return (
        <View style={styles.container}>
            <TextInput
                placeholder="Enter Goal"
                style={styles.textinput}
                value={goal}
                onChangeText={goalInputHandler}>
            </TextInput>
            <TouchableOpacity style={styles.button} onPress={addGoalHandler}><Text style={styles.btnText}>ADD GOAL</Text></TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        //flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        margin: 10,
        marginTop: 30,
        padding: 25,
        // borderColor: "black",
        borderBottomColor: "black",
        //borderWidth: 2,
    },
    textinput: {
        flex: 1,
        borderColor: "black",
        borderWidth: 2,
        borderRadius: 5,
        padding: 5,
        margin: 5,
    },
    button: {
        borderColor: "black",
        padding: 5,
        backgroundColor: "blue",
    },
    btnText: {
        color: "white",
    },
})

export default GoalInput;