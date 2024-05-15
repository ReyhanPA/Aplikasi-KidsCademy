import React from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import { IconElectrifity, IconMedal } from "../../../assets/icon";

const TopBarDashboard = () => {
  return (
    <View className="flex flex-row h-12 items-center justify-between px-4 bg-white fixed top-0">
      <View className="flex-1 flex-row items-center justify-start">
        <Text className="text-xl font-bold text-[#1A8EFD]">XP</Text>
        <Text className="text-xl font-bold text-black">1000</Text>
      </View>
      <TouchableOpacity>
        <View className="flex flex-row h-8 w-16 items-center justify-center bg-[#EFF9FF] rounded-full border border-[#55ACEE]">
          <IconMedal height={18} width={18} />
          <Text className="text-xl font-bold text-black items-center">#1</Text>
        </View>
      </TouchableOpacity>
      <View className="flex-1 flex-row items-center justify-end">
        <IconElectrifity height={20} width={20} />
        <Text className="text-xl font-bold text-black items-center">150</Text>
      </View>
    </View>
  );
};

export default TopBarDashboard;
