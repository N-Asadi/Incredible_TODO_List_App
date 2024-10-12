import { View, Text } from "react-native";
import React from "react";
import ToDoList from "./ToDoList";
import ToDoForm from "./ToDoForm";

const App = () => {
  return (
    <View>
      <ToDoList />
      <ToDoForm />
    </View>
  ); 
};

export default App;
