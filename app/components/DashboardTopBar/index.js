import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { IconElectrifity, IconMedal } from "../../../assets/icon";
import { router } from 'expo-router';

const DashboardTopBar = () => {
  return (
    <View className="flex flex-row h-12 items-center justify-between px-4 bg-white fixed top-0">
      <View className="flex-1 flex-row items-center justify-start">
        <Text className="text-xl font-semibold text-[#1A8EFD]">XP</Text>
        <Text className="text-xl font-semibold text-black">1000</Text>
      </View>
      <TouchableOpacity onPress={() => router.push({pathname: "../../leaderboardScreen"})} activeOpacity={0.7}>
        <View className="flex flex-row h-8 w-16 items-center justify-center bg-[#EFF9FF] rounded-full">
          <IconMedal height={18} width={18} />
          <Text className="text-xl font-semibold text-black items-center">#1</Text>
        </View>
        <View className="before:bg-[#55ACEE] before:h-8 before:w-16 before:rounded-full before:absolute before:top-1 before:-z-10" />
      </TouchableOpacity>
      <View className="flex-1 flex-row items-center justify-end">
        <IconElectrifity height={20} width={20} />
        <Text className="text-xl font-semibold text-black items-center">150</Text>
      </View>
    </View>
  );
};

export default DashboardTopBar;
