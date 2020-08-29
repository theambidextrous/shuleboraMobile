import React from "react";
// import LinearGradient from "react-native-linear-gradient";
import { LinearGradient } from "expo-linear-gradient";
import MaterialIcons from "react-native-vector-icons/MaterialCommunityIcons";

import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import * as Animatable from "react-native-animatable";

import colors from "../config/colors";
// import SignInScreen from "./SignInScreen";

function SplashScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Animatable.Image
          animation="bounceIn"
          duration={1500}
          source={require("../assets/shulebora-logo-light.png")}
          resizeMode="contain"
          style={styles.logo}
        />
      </View>
      <Animatable.View
        animation="fadeInUpBig"
        duration={1500}
        style={styles.footer}
      >
        <Text style={styles.title}>Shule Bora Digital</Text>
        <Text style={styles.text}>Learn From the Best, at Your Own Pace</Text>
        <View style={{ flexDirection: "row", width: "100%" }}>
          <View style={[styles.button, { marginRight: 8 }]}>
            <TouchableOpacity
              onPress={() => navigation.navigate("PreviewScreen")}
            >
              <LinearGradient
                colors={[colors.primary, colors.primary_dark]}
                style={styles.signIn}
              >
                <MaterialIcons name="video" color={colors.white} size={20} />
                <Text style={styles.textSign}>Try for Free</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
          <View style={[styles.button]}>
            <TouchableOpacity
              onPress={() => navigation.navigate("SignInScreen")}
            >
              <LinearGradient
                colors={[colors.secondary, colors.secondary_dark]}
                style={[styles.signIn]}
              >
                <Text style={styles.textSign}>Get Started</Text>
                <MaterialIcons
                  name="arrow-right"
                  color={colors.white}
                  size={20}
                />
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </View>
      </Animatable.View>
    </View>
  );
}
export default SplashScreen;

const { height } = Dimensions.get("screen");
const height_logo = height * 0.28;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
  },
  header: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  footer: {
    flex: 1,
    backgroundColor: colors.white,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 50,
    paddingHorizontal: 30,
  },
  logo: {
    width: height_logo,
    height: height_logo,
  },
  title: {
    color: "#05375a",
    fontSize: 30,
    fontWeight: "bold",
  },
  text: {
    color: "grey",
    marginTop: 5,
  },
  button: {
    alignItems: "flex-end",
    marginTop: 30,
  },
  signIn: {
    width: 150,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    flexDirection: "row",
  },
  textSign: {
    color: colors.white,
    fontWeight: "bold",
  },
});
