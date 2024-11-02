import { useState } from "react";
import ToDoList from "./ToDoList";

export default function App() {
  const [tasks, setTasks] = useState(["Do laundry", "Go to gym", "Walk dog"]);
  return (
    <div>
      <h1>My Tasks</h1>
      <ToDoList tasks={tasks} />
    </div>
  );
}

// import { View, Text } from "react-native";
// import React from "react";
// import ToDoList from "./ToDoList";
// import ToDoForm from "./ToDoForm";

// const App = () => {
//   return (
//     <View>
//       <ToDoList />
//       <ToDoForm />
//     </View>
//   );
// };

// export default App;
