import React from "react";
import { Text, StyleSheet, Pressable, View } from "react-native";
import MainLayout from "../../layouts/MainLayout";

const AboutScreen = () => {
  const handlePress = () => alert("Easter Egg! 🎉 You're awesome!");

  const getCurrentDate = () => {
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return new Date().toLocaleDateString(undefined, options);
  };

  return (
    <MainLayout>
      <View style={styles.container}>
        <Text style={styles.title}>About This App</Text>
        <Text style={styles.text}>App Name: Incredible ToDo List</Text>
        <Text style={styles.text}>Version: 1.0</Text>
        <Pressable onPress={handlePress}>
          <Text style={styles.link}>Created by: Nasratullah</Text>
        </Pressable>

        <View style={styles.dateCard}>
          <Text style={styles.dateText}>{getCurrentDate()}</Text>
        </View>
      </View>
    </MainLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#6200ea",
    marginBottom: 20,
  },
  text: {
    fontSize: 18,
    marginVertical: 5,
  },
  link: {
    fontSize: 18,
    color: "#6200ea",
    textDecorationLine: "underline",
    marginVertical: 10,
  },
  dateCard: {
    marginTop: 30,
    padding: 15,
    backgroundColor: "#f4f4f8",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
    alignItems: "center",
    justifyContent: "center",
    width: "80%",
  },
  dateText: {
    fontSize: 20,
    color: "#1e3a8a",
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default AboutScreen;
