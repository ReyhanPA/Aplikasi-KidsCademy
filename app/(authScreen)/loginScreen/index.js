import React, { useState } from "react";
import { Text, View, ScrollView, StyleSheet, StatusBar, SafeAreaView } from "react-native";
import { TextInput, HelperText } from "react-native-paper";
import { styled } from "nativewind";
import AuthButton from "../../components/AuthButton/AuthButton";
import { router } from "expo-router";
import { useAuth } from "../../../contexts/AuthProvider";
import Spinner from 'react-native-loading-spinner-overlay';

const StyledTextInput = styled(TextInput);
const StyledHelperText = styled(HelperText);

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({
    email: "",
    password: ""
  })
  const [loading, setLoading] = useState(false);
  const { signIn } = useAuth();

  const validate = () => {
    let newErrors = {
      email: "",
      password: ""
    };

    if (!email) {
      newErrors.email = "Email is required";
    }

    if (!password) {
      newErrors.password = "Password is required";
    }

    return newErrors;
  }

  const handleSignIn = () => {
    const findErrors = validate();
    if (Object.values(findErrors).some(value => value !== "")) {
      setErrors(findErrors);
    } else {
      setLoading(true);
      signIn(email, password).then(res=>{
        router.replace("../../(tabs)/dashboardScreen")
      }).catch(error => {
        let newErrors = {
          email: "",
          password: ""
        };
        if (error.code === "auth/invalid-email") {
          newErrors.email = "Email or password invalid.";
        } else {
          newErrors.email = "Something went wrong.";
        }
        setErrors(newErrors);
      }).finally(() => {
        setLoading(false);
      });
    }
  };

  if (loading) {
    return (
      <SafeAreaView style={styles.container}>
        <Spinner visible={loading} />
      </SafeAreaView>
    );
  }

  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      className="flex h-full py-2 bg-white flex-column"
    >
      <SafeAreaView style={styles.container}>
        <View className="bg-white">
          <View className="flex mt-10 flex-row justify-center items-center">
            <Text className="text-2xl text-[#FBA319] font-bold m-0 p-0">
              K I D S{" "}
            </Text>
            <Text className="text-2xl text-[#19467E] font-bold m-0 p-0">
              C A D E M Y
            </Text>
          </View>
          <View className="flex justify-center items-center">
            <Text className="text-lg text-[#19467E] font-bold m-0 p-0">
              Where Learning Feels Fun
            </Text>
          </View>
          <View className="flex mt-8 mb-8 justify-center items-center">
            <Text className="text-lg text-slate-400 font-bold m-0 p-0">
              Masuk
            </Text>
          </View>
        </View>
        <View className="bg-white items-center">
          <StyledTextInput
            className="w-8/12 h-12 rounded-2xl mx-4 bg-white"
            outlineColor="#3678DD"
            activeOutlineColor="#3678DD"
            mode="outlined"
            label="Email"
            value={email}
            onChangeText={(email) => {
              setErrors(errors => ({ ...errors, email: "" })),
              setEmail(email)
            }}
            error={errors.email !== ""}
          />
          <StyledHelperText type="error" visible={errors.email !== ""}>{errors.email}</StyledHelperText>
          <StyledTextInput
            className="w-8/12 h-12 rounded-2xl mx-4 bg-white"
            outlineColor="#3678DD"
            activeOutlineColor="#3678DD"
            mode="outlined"
            label="Password"
            value={password}
            onChangeText={(password) => {
              setErrors(errors => ({ ...errors, password: "" })),
              setPassword(password)
            }}
            error={errors.password !== ""}
            secureTextEntry={true}
          />
          <StyledHelperText  type="error" visible={errors.password !== ""}>{errors.password}</StyledHelperText>
          <AuthButton onPress={handleSignIn} text="Masuk" />
          <Text className="text-md text-slate-400 font-bold">atau</Text>
          <AuthButton
            onPress={() =>
              router.navigate({ pathname: "../../../(authScreen)/registerScreen" })
            }
            text="Daftar"
          />
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
});

export default LoginScreen;
