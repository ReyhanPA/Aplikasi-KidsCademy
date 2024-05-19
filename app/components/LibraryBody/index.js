import React from "react";
import { View, ScrollView, Text, TouchableOpacity } from "react-native";
import { IconClick, IconClickBlack, IconArrowDown } from "../../../assets/icon";
import { router } from 'expo-router';

const subject = [
    {
      id : 1,
      name : 'Huruf',
      color : '#0979BD'
    },
    {
      id : 2,
      name : 'Baca',
      color : '#ffcf7c'
    },
    {
      id : 3,
      name : 'Hitung',
      color : '#228b22'
    },
    {
      id : 4,
      name : 'Logika',
      color : '#00bfff'
    },
    {
      id : 5,
      name : 'Hiburan',
      color : '#D9D9D9'
    }
  ]
const LibraryBody = () => {
    return (
        <ScrollView className="flex-1 h-full w-full bg-white px-4">
            <Text className="text-xl font-semibold text-black">Library</Text>
            <View className="flex justify-center items-center">
                {subject.map((item) => (
                    <TouchableOpacity onPress={() => router.push({pathname: "../../(tabs)/libraryScreen/[subjectScreen]", params: {subject: item.name}})} activeOpacity={0.7} key={item.id} className={`flex justify-between h-32 w-5/6 my-2 px-4 py-6 rounded-2xl bg-[#0979BD] shadow-lg shadow-black`}>
                        <Text className="text-2xl font-medium text-white text-center">
                            {item.name}
                        </Text>
                    </TouchableOpacity>
                ))}
            </View>
        </ScrollView>
    );
  };
  
  export default LibraryBody;