import React, { useState } from "react";
import { SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"
import GoalInput from "./components/GoalInput";
import GoalItem from "./components/GoalItem";

const App = () => {

  const [list, setList] = useState<string[]>([]);

  const addGoalHandler = (goalText: string) => {
    /*setState((prevState)=>(prevState + newElement))*/
    setList((currentGoals) => [...currentGoals, goalText]);

  }

  return (
    <SafeAreaView style={styles.container}>
      <GoalInput onGoalAdd={addGoalHandler}></GoalInput>
      {/* child to parent */}
      <View style={styles.goalContainer}>
        <Text style={styles.text}>List of Goals</Text>
        <ScrollView>
          {list.map((value, index) => (
            <GoalItem key={index} text={value}></GoalItem>
          ))}
          {/* parent to child */}
        </ScrollView>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderColor: "black",
    borderWidth: 3,
    borderRadius: 10,
    margin: 15,
    padding: 5,
    backgroundColor: "lightgray",
  },
  text: {
    fontSize: 24,
    color: "black",
    fontWeight: "bold",
    margin: 5,
  },
  goalContainer: {
    flex: 5,
  },
})

export default App;