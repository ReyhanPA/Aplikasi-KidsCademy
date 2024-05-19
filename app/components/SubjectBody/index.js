import React from "react";
import { View, ScrollView, Text, TouchableOpacity } from "react-native";
import { router } from 'expo-router';

const material = [
    {
      id : 1,
      name : 'Huruf A',
      subject : 'Huruf'
    },
    {
      id : 2,
      name : 'Latihan Huruf A',
      subject : 'Huruf'
    },
    {
      id : 3,
      name : 'Video Huruf A',
      subject : 'Huruf'
    },
    {
      id : 4,
      name : 'Huruf B',
      subject : 'Huruf'
    },
    {
      id : 5,
      name : 'Latihan Huruf B',
      subject : 'Huruf'
    },
    {
      id : 6,
      name : 'Baca Nama Hewan',
      subject : 'Baca'
    },
    {
      id : 7,
      name : 'Penjumlahan Dasar',
      subject : 'Hitung'
    },
    {
      id : 8,
      name : 'Logika Dasar',
      subject : 'Logika'
    },
    {
      id : 9,
      name : 'Video Viral Bagas Dribble',
      subject : 'Hiburan'
    }
  ]

const SubjectBody = ({subject}) => {
    return (
        <ScrollView className="flex-1 h-full w-full bg-white px-4">
            <Text className="text-xl font-semibold text-black">{subject}</Text>
            <View className="flex justify-center items-center">
                {material.map((item) => {if(item.subject === subject){
                  return (
                    <TouchableOpacity onPress={() => router.push({pathname: "../../../(tabs)/libraryScreen/[subjectScreen]/[materialScreen]", params: {material: item.name}})} activeOpacity={0.7} key={item.id} className={`flex justify-between h-32 w-5/6 my-2 px-4 py-6 rounded-2xl bg-[#0979BD] shadow-lg shadow-black`}>
                    <Text className="text-2xl font-medium text-white text-center">
                        {item.name}
                    </Text>
                </TouchableOpacity>
                )}})}
            </View>
        </ScrollView>
    );
  };
  
  export default SubjectBody;