import React, { useState } from "react";
import { SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"
import GoalInput from "./components/GoalInput";
import GoalItem from "./components/GoalItem";


/*
what we did initially: had an array of goals(string), and passed a new goal in form of string
new: we are creating a new type Goal so that we can pass id and goal text together

for that we gotta create a new interface and change the state type. 
*/
interface Goal {
  id: string;
  text: string;
}

const App = () => {

  const [list, setList] = useState<Goal[]>([]);

  const addGoalHandler = (goalText: string) => {
    /*setState((prevState)=>(prevState + newElement))*/
    setList((currentGoals) => [...currentGoals, { id: Math.random().toString(), text: goalText }]);

  }

  const deleteGoalHandler = (goalId: string) => {
    //console.log("delete");
    setList((currentGoals) => currentGoals.filter((goal) => goal.id !== goalId))
  }

  return (
    <SafeAreaView style={styles.container}>
      <GoalInput onGoalAdd={addGoalHandler}></GoalInput>
      {/* child to parent */}
      <View style={styles.goalContainer}>
        <Text style={styles.text}>List of Goals</Text>
        <ScrollView>
          {list.map((value) => (
            <GoalItem key={value.id} id={value.id} text={value.text} onDeleteItem={deleteGoalHandler}></GoalItem>
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