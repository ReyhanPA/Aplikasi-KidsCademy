import { View, TextInput } from "react-native";
import React from "react";

const AuthInput = ({ value, setValue, placeholder, secureTextEntry }) => {
  return (
    <View className="w-9/12">
      <TextInput
        className="border-2 border-[#3678DD] rounded-2xl p-2 my-4 mb-4 mx-4"
        value={value}
        onChangeText={setValue}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

export default AuthInput;
