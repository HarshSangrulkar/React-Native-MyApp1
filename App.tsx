import React, { useState } from "react";
import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"

const App = ()=>{

  const [goal,setGoal]=useState('');

  const goalInputHandler =(eneterText:string)=>{
    //console.log(eneterText);
    setGoal(eneterText);
  }

  const addGoalHandler=()=>{
    //display the entered value
    //for this first save the entered value in a state
    console.log(goal);
  }

  return(
    <SafeAreaView style={styles.container}>
      <View style={styles.inputContainer}>
      <TextInput style={styles.textinput} placeholder="Your course Goal" onChangeText={goalInputHandler}></TextInput>
      <TouchableOpacity style={styles.button} onPress={addGoalHandler}><Text>Add Goal</Text></TouchableOpacity>
      </View>
      <Text style={styles.text}>List of Goals</Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:"center",
    alignItems:"center",
    borderColor:"black",
    borderWidth:3,
    borderRadius:10,
    margin:15,
    padding:5,
    backgroundColor:"lightgray"
  },
  text:{
    fontSize:24,
    color:"black",
  },
  inputContainer:{
    // flex:1,
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",
    margin:10,
    padding:25,
    borderColor:"black",
    borderWidth:2,
    
  },
  textinput:{
    flex:1,
    borderColor:"black",
    borderWidth:2,
    borderRadius:5,
    padding:5,
    margin:5,
  },
  button:{
    borderColor:"black",
    padding:5,
    backgroundColor:"blue",
  }
})

export default App;