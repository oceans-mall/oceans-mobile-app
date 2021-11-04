import React from "react";
import {
  SafeAreaView,
  Image,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import COLORS from "../../consts/colors";

export const Register = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.loginContainer}>
      <View style={styles.login}>
        <View>
          <Text
            style={{
              fontSize: 20,
              marginBottom: 20,
              fontWeight: "bold",
              color: COLORS.primary,
            }}
          >
            CREATE YOUR ACCOUNT
          </Text>
          <TextInput
            placeholder="Full Name"
            placeholderTextColor={COLORS.primary}
            underlineColorAndroid={"transparent"}
            textDecorationLine="#fff"
            style={styles.textLayout}
          />
          <TextInput
            placeholder="Email"
            placeholderTextColor={COLORS.primary}
            underlineColorAndroid={"transparent"}
            textDecorationLine="#fff"
            style={styles.textLayout}
          />
          <TextInput
            placeholder="Phone Number"
            placeholderTextColor={COLORS.primary}
            underlineColorAndroid={"transparent"}
            textDecorationLine="#fff"
            style={styles.textLayout}
          />
          <TextInput
            placeholder="Password"
            secureTextEntry={true}
            placeholderTextColor={COLORS.primary}
            underlineColorAndroid={"transparent"}
            textDecorationLine="#fff"
            style={styles.textLayout}
          />
          <TextInput
            placeholder="Confirm Password"
            secureTextEntry={true}
            placeholderTextColor={COLORS.primary}
            underlineColorAndroid={"transparent"}
            textDecorationLine="#fff"
            style={styles.textLayout}
          />
        </View>
        <View style={styles.resetPswd}>
          <TouchableOpacity onPress={() => navigation.navigate("Reset")}>
            <Text style={styles.resetPswdText}>Forgot Password?</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => navigation.navigate("Login")}
        >
          <View style={styles.btnContainer}>
            <Text style={styles.btnTxt}>SIGNUP</Text>
          </View>
        </TouchableOpacity>
        <View>
          <Text>By signinup you concent to our</Text>
          <TouchableOpacity>
            <Text
              style={{
                textDecorationLine: "underline",
                color: COLORS.secondary,
              }}
            >
              Terms and Conditions
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  loginContainer: {
    flex: 1,
  },
  login: {
    flex: 1,
    top: -15,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8,
  },
  logo: {
    width: 400,
    height: 150,
  },
  textLayout: {
    fontSize: 16,
    alignSelf: "stretch",
    height: 50,
    borderRadius: 5,
    width: 270,
    marginBottom: 20,
    paddingLeft: 5,
    borderWidth: 0.5,
    borderColor: COLORS.primary,
    textAlign: "center",
    color: COLORS.primary,
    backgroundColor: COLORS.silver,
  },
  btnContainer: {
    backgroundColor: COLORS.primary,
    height: 50,
    width: 270,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
  },
  btnTxt: {
    fontSize: 15,
    fontWeight: "bold",
    color: COLORS.white,
  },
  resetPswd: {
    alignSelf: "flex-end",
    marginRight: 25,
  },
  resetPswdText: {
    fontSize: 12,
    color: COLORS.primary,
    textDecorationLine: "underline",
  },
});