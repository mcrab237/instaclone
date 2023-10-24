import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { Ionicons } from "@expo/vector-icons"; 
const Login = ({navigation}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton}>
        <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>
      <Text style={styles.title}>Instagram</Text>
      <TextInput style={styles.input} placeholder="asad_khasanov" />
      <TextInput style={styles.input} placeholder="Password" secureTextEntry />
      <TouchableOpacity style={styles.forgotPassword}>
        <Text style={styles.forgotPasswordText}>Forgot password?</Text>
      </TouchableOpacity>
      <TouchableOpacity
      onPress={() => navigation.navigate("Home")}
      style={styles.loginButton}>
        <Text style={styles.loginText}>Log in</Text>
      </TouchableOpacity>
      <TouchableOpacity
      onPress={() => navigation.navigate("Home")}
      style={styles.facebookButton}>
        <Ionicons name="logo-facebook" size={24} color="#1877F2" />
        <Text style={styles.facebookText}> Log in with Facebook</Text>
      </TouchableOpacity>
      <View style={styles.orContainer}>
        <View style={styles.line}></View>
        <Text style={styles.orText}>OR</Text>
        <View style={styles.line}></View>
      </View>
      <View style={styles.signUpContainer}>
        <Text>Don't have an account? </Text>
        <TouchableOpacity 
        onPress={() => navigation.navigate("Signup")}
        >
          <Text style={styles.signUpText}>Sign up.</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.footer}>Instagram or Facebook</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    backgroundColor: "#FFFFFF",
  },
  backButton: {
    position: "absolute",
    top: 40,
    left: 20,
  },
  title: {
    fontSize: 36,
    fontWeight: "bold",
    marginBottom: 20,
    alignSelf: "center",
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  forgotPassword: {
    alignSelf: "flex-end",
  },
  forgotPasswordText: {
    color: "#0099FF",
  },
  loginButton: {
    height: 50,
    backgroundColor: "#0099FF",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    marginVertical: 20,
  },
  loginText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
  },
  facebookButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  facebookText: {
    color: "#1877F2",
    fontSize: 16,
  },
  orContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: "gray",
  },
  orText: {
    width: 40,
    textAlign: "center",
  },
  signUpContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 10,
  },
  signUpText: {
    color: "#0099FF",
  },
  footer: {
    color: "gray",
    textAlign: "center",
  },
});

export default Login;
