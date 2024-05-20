import React from "react";
import { Pressable, View, Text } from "react-native";

const AuthButton = ({ onPress, text }) => {
  return (
    <Pressable
      onPress={onPress}
      className="w-8/12 h-12 bg-[#3678DD] items-center justify-center rounded-full p-2 my-4 mx-4"
    >
      <Text className="text-white font-bold text-lg">{text}</Text>
    </Pressable>
  );
};

export default AuthButton;
