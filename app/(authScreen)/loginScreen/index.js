import React, { useState } from "react";
import { Text, View, TextInput, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AuthButton from "../../components/AuthButton/AuthButton";
import { router } from "expo-router";
import AuthInput from "../../components/AuthInput/AuthInput";

const LoginScreen = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onLoginPressed = () => {
    console.warn("Log in");
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
          <View className="flex mt-10 mb-16 justify-center items-center">
            <Text className="text-lg text-slate-400 font-bold m-0 p-0">
              Masuk
            </Text>
          </View>
        </View>
        <View className="bg-white items-center">
          <AuthInput
            value={username}
            setValue={setUsername}
            placeholder="Username"
          />
          <AuthInput
            value={password}
            setValue={setPassword}
            placeholder="Password"
            secureTextEntry={true}
          />
          <AuthButton onPress={onLoginPressed} text="Masuk" />
          <Text className="text-md text-slate-400 font-bold">atau</Text>
          <AuthButton
            onPress={() =>
              router.push({ pathname: "../../../(authScreen)/registerScreen" })
            }
            text="Daftar"
          />
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default LoginScreen;
