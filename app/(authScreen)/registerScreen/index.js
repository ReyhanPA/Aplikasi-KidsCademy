import React, { useState } from "react";
import { Text, View,  ScrollView } from "react-native";
import { TextInput, HelperText } from "react-native-paper";
import { styled } from "nativewind";
import { SafeAreaView } from "react-native-safe-area-context";
import AuthButton from "../../components/AuthButton/AuthButton";
import { router } from "expo-router";
import { useAuth } from "../../../contexts/AuthProvider";

const StyledTextInput = styled(TextInput);
const StyledHelperText = styled(HelperText);

const RegisterScreen = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [errors, setErrors] = useState({
    username: "",
    email: "",
    password: "",
    repeatPassword: ""
  })
  const { signUp } = useAuth();

  const validate = () => {
    let newErrors = {
      username: "",
      email: "",
      password: "",
      repeatPassword: ""
    };

    if (!username) {
      newErrors.username = "Username is required";
    }

    if (!email) {
      newErrors.email = "Email is required";
    }

    if (!password) {
      newErrors.password = "Password is required";
    }

    if (!repeatPassword) {
      newErrors.repeatPassword = "Repeat Password is required";
    } else if (password !== repeatPassword){
        newErrors.repeatPassword = "Repeat Password is not equal with password";
    } 

    return newErrors;
  }

  const handleSignUp = () => {
    const findErrors = validate();
    if (Object.values(findErrors).some(value => value !== "")) {
      setErrors(findErrors);
    } else {
      signUp(email, password).then(res=>{
        console.log("sign up success", res)
        router.replace("../../(tabs)/dashboardScreen")
      }).catch((error)=>{
          let newErrors = {
              email: "",
              password:""
          }
          if (error.code === "auth/invalid-email"){
              newErrors.email = "Email or password invalid.";
          } else {
              newErrors.email = "Something went wrong.";
          }
          setErrors(newErrors)
      });
    }
  };

  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      className="flex h-full py-2 bg-white flex-column"
    >
      <SafeAreaView>
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
              Daftar
            </Text>
          </View>
        </View>
        <View className="bg-white items-center">
          <StyledTextInput
            className="w-8/12 h-12 rounded-2xl mx-4 bg-white"
            outlineColor="#3678DD"
            activeOutlineColor="#3678DD"
            mode="outlined"
            value={username}
            label="Username"
            onChangeText={(username) => {
              setErrors(errors => ({ ...errors, username: "" })),
              setUsername(username)
            }}
          />
          <StyledHelperText type="error" visible={errors.username !== ""}>{errors.username}</StyledHelperText>
          <StyledTextInput
            className="w-8/12 h-12 rounded-2xl mx-4 bg-white"
            outlineColor="#3678DD"
            activeOutlineColor="#3678DD"
            mode="outlined"
            value={email}
            label="Email"
            onChangeText={(email) => {
              setErrors(errors => ({ ...errors, email: "" })),
              setEmail(email)
            }}
          />
          <StyledHelperText type="error" visible={errors.email !== ""}>{errors.email}</StyledHelperText>
          <StyledTextInput
            className="w-8/12 h-12 rounded-2xl mx-4 bg-white"
            outlineColor="#3678DD"
            activeOutlineColor="#3678DD"
            mode="outlined"
            value={password}
            secureTextEntry={true}
            label="Password"
            onChangeText={(password) => {
              setErrors(errors => ({ ...errors, password: "" })),
              setPassword(password)
            }}
          />
          <StyledHelperText type="error" visible={errors.password !== ""}>{errors.password}</StyledHelperText>
          <StyledTextInput
            className="w-8/12 h-12 rounded-2xl mx-4 bg-white"
            outlineColor="#3678DD"
            activeOutlineColor="#3678DD"
            mode="outlined"
            value={repeatPassword}
            secureTextEntry={true}
            label="Repeat Password"
            onChangeText={(repeatPassword) => {
              setErrors(errors => ({ ...errors, repeatPassword: "" })),
              setRepeatPassword(repeatPassword)
            }}
          />
          <StyledHelperText type="error" visible={errors.repeatPassword !== ""}>{errors.repeatPassword}</StyledHelperText>
          <AuthButton onPress={handleSignUp} text="Daftar" />
          <Text className="text-md text-slate-400 font-bold">atau</Text>
          <AuthButton
            onPress={() =>
              router.push({ pathname: "../../../(authScreen)/loginScreen" })
            }
            text="Masuk"
          />
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default RegisterScreen;
