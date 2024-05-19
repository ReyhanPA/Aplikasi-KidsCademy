import React from "react";
import { View, ScrollView, Text, TouchableOpacity } from "react-native";
import { IconClick, IconClickBlack, IconArrowDown } from "../../../assets/icon";
import { useRoute } from 'expo-router';

const material = [
    {
      id : 1,
      name : 'Huruf A'
    },
    {
      id : 2,
      name : 'Latihan Huruf A'
    },
    {
      id : 3,
      name : 'Video Huruf A'
    },
    {
      id : 4,
      name : 'Huruf B'
    },
    {
      id : 5,
      name : 'Latihan Huruf B'
    }
  ]

const SubjectBody = () => {
    return (
        <ScrollView className="flex-1 h-full w-full bg-white px-4">
            <Text className="text-xl font-semibold text-black">Bahan Belajar</Text>
            <View className="flex justify-center items-center">
                {material.map((item) => (
                    <TouchableOpacity activeOpacity={0.7} key={item.id} className={`flex justify-between h-32 w-5/6 my-2 px-4 py-6 rounded-2xl bg-[#0979BD] shadow-lg shadow-black`}>
                        <Text className="text-2xl font-medium text-white text-center">
                            {item.name}
                        </Text>
                    </TouchableOpacity>
                ))}
            </View>
        </ScrollView>
    );
  };
  
  export default SubjectBody;