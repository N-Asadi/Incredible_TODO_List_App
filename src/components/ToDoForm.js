import React, { useState } from "react";
import { StyleSheet, View, TextInput, Button } from "react-native";

const ToDoForm = ({ addTask }) => {
  const [taskText, setTaskText] = useState(""); // Local state for the input field

  const handleAddTask = () => {
    if (taskText.trim() !== "") {
      addTask(taskText); // Pass the taskText to the parent component
      setTaskText(""); // Clear the input field after adding
    }
  };

  return (
    <View style={styles.form}>
      <TextInput
        style={styles.input}
        placeholder="Add a new task..."
        onChangeText={(text) => setTaskText(text)} // Update taskText state on user input
        value={taskText} // Controlled input bound to taskText
      />
      <Button title="Add Task" onPress={handleAddTask} />
    </View>
  );
};

const styles = StyleSheet.create({
  form: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 20,
    marginTop: 20,
    backgroundColor: "#f9f9f9",
    padding: 10,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ccc",
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginRight: 10,
    borderRadius: 8,
  },
  button: {
    backgroundColor: "#007BFF",
    color: "#fff",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 8,
    textAlign: "center",
  },
});

export default ToDoForm;
