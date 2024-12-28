import React, { useState } from "react";
import { View, TextInput, Text, TouchableOpacity, Image, StyleSheet, Alert } from "react-native";
import { useRouter } from "expo-router";
import axios from "axios";
import API_URL from "../../config/config";

export default function RegisterScreen() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const router = useRouter();

  const handleRegister = async () => {
    try {
      await axios.post(`${API_URL}/api/auth/register`, {
        username,
        password,
        email,
      });
      Alert.alert("Registration Successful", "You can now log in");
      router.replace("/auth/LoginScreen");
    } catch (error) {
      Alert.alert("Registration Failed", (error as any).response?.data?.message || "An error occurred");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}> {}
        <Image
          source={require("../../assets/images/bird.png")} 
          style={styles.image}
        />
        <Text style={styles.title}>Create an Account</Text>
        <Text style={styles.subtitle}>Register now and unlock new opportunities.</Text>
      </View>

      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <TouchableOpacity
        style={styles.registerButton}
        onPress={handleRegister}
      >
        <Text style={styles.registerButtonText}>Register</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => router.replace("/auth/LoginScreen")}
      >
        <Text style={styles.backButtonText}>Back to Login</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#81C784", 
    padding: 16,
  },
  header: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 32,
    paddingTop: 50,
  },
  image: {
    width: 120,
    height: 120,
    marginBottom: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#1A1A19", 
  },
  subtitle: {
    fontSize: 16,
    color: "#2C6B3B", 
  },
  input: {
    width: "100%",
    height: 50,
    borderColor: "#A5D6A7", 
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 16,
    marginBottom: 16,
    backgroundColor: "#C8E6C9", 
    fontSize: 16,
    color: "#1A1A19", 
  },
  registerButton: {
    width: "100%",
    height: 50,
    backgroundColor: "#388E3C", 
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 16,
    shadowColor: "#222",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4, 
  },
  registerButtonText: {
    color: "#ffffff", 
    fontSize: 18,
    fontWeight: "bold",
  },
  backButton: {
    width: "100%",
    height: 50,
    borderColor: "#388E3C", 
    backgroundColor: "#81C784", 
    borderWidth: 1,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  backButtonText: {
    color: "#1A1A19", 
    fontSize: 16,
    fontWeight: "bold",
  },
});
