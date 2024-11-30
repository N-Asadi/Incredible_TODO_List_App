import React, { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import ToDoList from "../components/ToDoList";
import ToDoForm from "../components/ToDoForm";
import MainLayout from "../../layouts/MainLayout";

const HomeScreen = ({ navigation }) => {
  const [tasks, setTasks] = useState(["Do laundry", "Go to gym", "Walk dog"]);

  const addTask = (taskText) => {
    const taskExists = tasks.some(
      (task) => task.toLowerCase() === taskText.toLowerCase()
    );

    if (taskExists) {
      alert("Task already exists!");
      return;
    }

    setTasks([...tasks, taskText]);
  };

  return (
    <MainLayout>
      <Text style={styles.title}>My Tasks</Text>
      <ToDoForm addTask={addTask} />
      <ToDoList tasks={tasks} />
      <Button
        title="Go to About"
        color="#6200ea"
        onPress={() => navigation.navigate("About")}
      />
    </MainLayout>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#6200ea",
    textAlign: "center",
    marginVertical: 10,
  },
});

export default HomeScreen;
