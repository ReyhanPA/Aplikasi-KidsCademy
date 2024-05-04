import React from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";

const TopBarDashboard = () => {

  return (
    <View className="flex flex-row h-12 items-center justify-between px-4 bg-white fixed top-0">
      <View className="flex-1 flex-row items-center justify-start">
        <Text className="text-xl font-bold text-[#1A8EFD]">XP</Text>
        <Text className="text-xl font-bold text-black">1000</Text>
      </View>
      <TouchableOpacity onPress={() => console.log('leaderboardScreen')}>
        <View className="flex flex-row h-8 w-16 items-center justify-center bg-[#EFF9FF] rounded-full border border-[#55ACEE]">
            <Image source={require('../../../assets/Icons/medal.png')} className="w-4 h-4" />
            <Text className="text-xl font-bold text-black">#1</Text>
        </View>
      </TouchableOpacity>
      <View className="flex-1 flex-row items-center justify-end">
        <Image source={require('../../../assets/Icons/electrifity.png')} className="w-5 h-5" />
        <Text className="text-xl font-bold text-black">150</Text>
      </View>
    </View>
  );
};


export default TopBarDashboard;
