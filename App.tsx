import React, { useState } from "react";
import { SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"

const App = () => {

  const [goal, setGoal] = useState('');
  const [list, setList] = useState<string[]>([])

  const goalInputHandler = (eneterText: string) => {
    //console.log(eneterText);
    setGoal(eneterText);
  }

  const addGoalHandler = () => {
    //display the entered value
    //for this first save the entered value in a state
    //console.log(goal);

    //syntax
    /*
    setState((prevState)=>(prevState + newElement))
    */
    setList((currentGoals) => [...currentGoals, goal]);
    setGoal("");
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.textinput} placeholder="Your course Goal"
          value={goal}
          onChangeText={goalInputHandler}></TextInput>
        <TouchableOpacity style={styles.button} onPress={addGoalHandler}><Text style={styles.btnText}>Add Goal</Text></TouchableOpacity>
      </View>

      <View style={styles.goalContainer}>
        <ScrollView>
          {/* react js by default has scroll on the web, for react native we must import the scroll view component. also we enclose the scroll view tag inside the normal view so it doesnt affect other space occupied */}
          <Text style={styles.text}>List of Goals</Text>
          {/* list.map((value)=><Text>{value}<Text/>) */}
          {list.map((value, index) => <View key={index}>
            <Text style={styles.goalItem}>{value}</Text>
          </View>)}
        </ScrollView>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    //alignItems: "center",
    borderColor: "black",
    borderWidth: 3,
    borderRadius: 10,
    margin: 15,
    padding: 5,
    backgroundColor: "lightgray"
  },
  text: {
    fontSize: 24,
    color: "black",
    fontWeight: "bold",
    margin: 5,
  },
  inputContainer: {
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
  goalContainer: {
    flex: 5,
  },
  goalItem: {
    margin: 5,
    padding: 10,
    backgroundColor: "purple",
    borderRadius: 5,
    color: "white",
    fontSize: 16,

  }
})

export default App;