import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Platform,
  Pressable,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
export default function LoginScreen() {
  const [isChecked, setIsChecked] = useState(false);
  const navigation = useNavigation();
const logo=require('../../assets/images/user.png')
  const handleRegisterPress = () => {
    navigation.navigate("register");
  };

  const handleLoginPress = () => {
    navigation.navigate("home");
  };

  return (
    <View style={styles.container}>
      <View style={styles.loginBox}>
        <Image  source={logo} style={styles.logo}/>
        <Text style={styles.heading}>Đăng Nhập</Text>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Tên đăng nhập:</Text>
          <TextInput
            style={styles.input}
            placeholder="Tên đăng nhập hoặc email"
            placeholderTextColor="#999"
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Mật khẩu:</Text>
          <TextInput
            style={styles.input}
            placeholder="Mật khẩu"
            placeholderTextColor="#999"
            secureTextEntry={true}
          />
        </View>

        <View style={styles.options}>
          <Pressable
            style={styles.rememberMe}
            onPress={() => setIsChecked(!isChecked)}
          >
            <View style={styles.customCheckbox}>
              {isChecked && <View style={styles.checkboxInner} />}
            </View>
            <Text style={styles.rememberText}>Nhớ mật khẩu</Text>
          </Pressable>

          <TouchableOpacity>
            <Text style={styles.forgotPassword}>Quên mật khẩu?</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.loginButton} onPress={handleLoginPress}>
          <Text style={styles.loginButtonText}>Đăng Nhập</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.signupLinkContainer}
          onPress={handleRegisterPress}
        >
          <Text style={styles.signupLink}>Đăng Ký</Text>
        </TouchableOpacity>
        
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white", // Light blue background
  },
  loginBox: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 30,
    width: 350,
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
      },
      android: {
        elevation: 5,
      },
    }),
    alignItems: "center",
  },
  logo:{
    width: 100,
    height: 60,
    resizeMode: "contain", // Keeps aspect ratio and contains within specified dimensions
    marginBottom: 20, 
  },
  heading: {
    fontSize: 24,
    fontWeight: "700",
    color: "#333",
    marginBottom: 20,
  },
  inputGroup: {
    marginBottom: 15,
    width: "100%",
  },
  label: {
    fontSize: 14,
    color: "#333",
    marginBottom: 5,
    fontWeight: "500",
  },
  input: {
    width: "100%",
    padding: 12,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 5,
    fontSize: 16,
  },
  options: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
    width: "100%",
  },
  rememberMe: {
    flexDirection: "row",
    alignItems: "center",
  },
  customCheckbox: {
    width: 20,
    height: 20,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: "#007BFF", // Blue color for the checkbox border
    justifyContent: "center",
    alignItems: "center",
  },
  checkboxInner: {
    width: 12,
    height: 12,
    backgroundColor: "#007BFF", // Blue color for the checkbox inner
    borderRadius: 2,
  },
  rememberText: {
    marginLeft: 8,
    color: "#333",
  },
  forgotPassword: {
    color: "#007BFF", // Blue color for the forgot password text
    fontWeight: "600",
  },
  loginButton: {
    backgroundColor: "#007BFF", // Blue color for the login button
    padding: 15,
    borderRadius: 5,
    width: "100%",
    alignItems: "center",
    ...Platform.select({
      ios: {
        shadowColor: "#007BFF",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.4,
        shadowRadius: 3,
      },
      android: {
        elevation: 3,
      },
    }),
  },
  loginButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "700",
  },
  signupLinkContainer: {
    marginTop: 15,
  },
  signupLink: {
    color: "#007BFF", // Blue color for the signup link
    fontWeight: "600",
    fontSize: 16,
  },
});
