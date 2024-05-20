import React from "react";
import { ScrollView, Text } from "react-native";

const MaterialBody = ({ material }) => {
  return (
    <ScrollView className="flex-1 h-full w-full bg-white px-4 ">
      <Text className="text-xl text-black mb-4">Ini nanti diisi konten {material}</Text>
    </ScrollView>
  );
};

export default MaterialBody;
