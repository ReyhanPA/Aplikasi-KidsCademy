import React from "react";
import { View, Text } from "react-native";

const BodyDashboard = () => {
  return (
    <View className="flex-1 bg-white px-4">
      <Text className="text-xl font-bold text-black">Learning Path</Text>
      <View className="flex flex-row items-center justify-between">
        <Text className="text-xl font-bold text-black">Umur :  2-4</Text> 
      </View>
    </View>
  );
};

export default BodyDashboard;
