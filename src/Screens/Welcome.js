import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

const Welcome = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Instagram</Text>
      <View style={styles.profileContainer}>
        <Image
          style={styles.profileImage}
          source={{
            uri: "https://scontent-atl3-2.xx.fbcdn.net/v/t39.30808-6/344873692_718891926587895_2014352947666914133_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=wQ86uwAyPtEAX_14FBE&_nc_ht=scontent-atl3-2.xx&oh=00_AfDdQ9sbDVFjcKQb85rcmA92NW-YwXX4h1ULtTU0XP1bsw&oe=6538024C",
          }}
        />
        <Text style={styles.username}>ato_bradley</Text>
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate("Login")}
        style={styles.loginButton}
      >
        <Text style={styles.loginText}>Log in</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.switchButton}>
        <Text style={styles.switchText}>Switch accounts</Text>
      </TouchableOpacity>
      <View style={styles.signUpContainer}>
        <Text>Don't have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
          <Text style={styles.signUpText}>Sign up.</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
  },
  title: {
    fontSize: 36,
    fontWeight: "bold",
    marginBottom: 40,
  },
  profileContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  username: {
    fontSize: 18,
    fontWeight: "bold",
  },
  loginButton: {
    width: 300,
    height: 50,
    backgroundColor: "#0099FF",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    marginBottom: 20,
  },
  loginText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
  },
  switchButton: {
    marginBottom: 40,
  },
  switchText: {
    fontSize: 16,
    color: "#0099FF",
  },
  signUpContainer: {
    flexDirection: "row",
  },
  signUpText: {
    color: "#0099FF",
  },
});

export default Welcome;
