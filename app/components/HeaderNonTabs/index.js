import React from "react";
import { View, Text } from "react-native";
import { router } from 'expo-router';
import { IconBack } from "../../../assets/icon";

const HeaderNonTabs = (props) => {
  const { headerName } = props;

  return (
    <View className="flex flex-row h-12 items-center px-4 bg-white fixed top-0">
      <IconBack height={20} width={20} onPress={() => router.back()}/>  
      <Text className="text-xl font-semibold text-black ml-4">{headerName}</Text>
    </View>
  );
};

export default HeaderNonTabs;
