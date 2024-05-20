import React, { useState } from "react";
import { Text, View, TextInput, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AuthButton from "../../components/AuthButton/AuthButton";
import AuthInput from "../../components/AuthInput/AuthInput";
import { router } from "expo-router";

const RegisterScreen = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfPassword] = useState("");

  const onRegisterPressed = () => {
    console.warn("Register");
  };

  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      className="flex h-full py-2 bg-white flex-column bg-white"
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
          <View className="flex mt-10 mb-16 justify-center items-center">
            <Text className="text-lg text-slate-400 font-bold m-0 p-0">
              Daftar
            </Text>
          </View>
        </View>
        <View className="bg-white items-center">
          <AuthInput
            value={username}
            setValue={setUsername}
            placeholder="Username"
          />
          <AuthInput value={email} setValue={setEmail} placeholder="Email" />
          <AuthInput
            value={password}
            setValue={setPassword}
            placeholder="Password"
            secureTextEntry={true}
          />
          <AuthInput
            value={confirmpassword}
            setValue={setConfPassword}
            placeholder="Confirm Password"
            secureTextEntry={true}
          />
          <AuthButton onPress={onRegisterPressed} text="Daftar" />
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
