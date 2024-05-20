import React, { useState } from "react";
import { View, ScrollView, Text, TouchableOpacity } from "react-native";
import { IconClick, IconClickBlack, IconArrowDown } from "../../../assets/icon";
import { router } from 'expo-router';

const data = [
  {
    id: 1,
    name: "Modul 1",
    description: "Berhitung tingkat 1",
    done: true
  },
  {
    id: 2,
    name: "Modul 2",
    description: "Berhitung tingkat 2",
    done: true
  },
  {
    id: 3,
    name: "Modul 3",
    description: "Berhitung tingkat 3",
    done: false
  },
  {
    id: 4,
    name: "Modul 4",
    description: "Berhitung tingkat 4",
    done: false
  },
  {
    id: 5,
    name: "Modul 5",
    description: "Berhitung tingkat 5",
    done: false
  },
  {
    id: 6,
    name: "Modul 6",
    description: "Berhitung tingkat 6",
    done: false
  },
]

const optionLearningPath = [
  {
    id: 1,
    label: "2-4"
  },
  {
    id: 2,
    label: "3-5"
  },
  {
    id: 3,
    label: "6-8"
  }
]

const DashboardBody = () => {
  const [openDropdown, setOpenDropdown] = useState(false);
  const [optionDropdown, setOptionDropdown] = useState(optionLearningPath[0].label);

  const handleOpenDropdown = () => {
    setOpenDropdown(!openDropdown);
  }

  const handleDropdown = (label) => {
    setOpenDropdown(false)
    setOptionDropdown(label);
  }

  return (
    <ScrollView className="flex-1 h-full w-full bg-white px-4">
      <Text className="text-xl font-semibold text-black">Learning Path</Text>
      <TouchableOpacity activeOpacity={0.7} onPress={handleOpenDropdown}>
        <View className="before:absolute before:top-10 before:left-8 before:z-10">
          {openDropdown ? (
            <View className="rotate-180">
              <IconArrowDown height={20} width={20}/> 
            </View>
          ) : (
            <View>
              <IconArrowDown height={20} width={20}/> 
            </View>
          )}
        </View>
        <View className="flex items-center justify-center my-4 p-4 h-16 w-full bg-[#EFF9FF] rounded-full">
          <Text className="text-xl font-semibold text-black">Umur :  {optionDropdown} Tahun</Text> 
        </View>
        <View className="before:h-16 before:w-full before:bg-[#55ACEE] before:rounded-full before:absolute before:top-5 before:-z-10" />
      </TouchableOpacity>
      {openDropdown && (
        <View className="before:flex before:h-44 before:left-3 before:right-3 before:w-full before:items-center before:gap-3 before:absolute before:top-20 before:rounded-3xl before:pt-10 before:-z-10 before:bg-white before:border-b-2 before:border-x-2 before:border-[#55ACEE]">
          <TouchableOpacity onPress={() => handleDropdown(optionLearningPath[0].label)} className="flex justify-center items-center w-[60%] bg-white">
            <Text className="text-xl font-normal text-black">Umur : {optionLearningPath[0].label} Tahun</Text>
          </TouchableOpacity>
          <View className="before:h-[2px] before:top-[74px] before:w-[50%] before:bg-[#DFE3E6] before:rounded-full before:absolute before:z-30"/>
          <TouchableOpacity onPress={() => handleDropdown(optionLearningPath[1].label)} className="flex justify-center items-center w-[60%] bg-white">
            <Text className="text-xl font-normal text-black">Umur : {optionLearningPath[1].label} Tahun</Text>
          </TouchableOpacity>
          <View className="before:h-[2px] before:top-[116px] before:w-[50%] before:bg-[#DFE3E6] before:rounded-full before:absolute before:z-30"/>
          <TouchableOpacity onPress={() => handleDropdown(optionLearningPath[2].label)} className="flex justify-center items-center w-[60%] bg-white">
            <Text className="text-xl font-normal text-black">Umur : {optionLearningPath[2].label} Tahun</Text>
          </TouchableOpacity>
        </View>
      )}
      <View className="flex items-end mx-4 bg-inherit">
        {data.map((item) => (item.done === true ? (
          <View key={item.id} className="flex flex-row justify-between w-full -z-20">
            <View className="flex-1 py-1 justify-between items-center">
              <View className="h-3 w-3 rounded-full bg-[#58BCEB]"/>
              <View className="h-3 w-3 rounded-full bg-[#58BCEB]"/>
              <View className="flex justify-center items-center h-7 w-7 rounded-full bg-[#0979BD]">
                <View className="h-3 w-3 rounded-full bg-[#FFCF7C]"/>
              </View>
              <View className="h-3 w-3 rounded-full bg-[#58BCEB]"/>
              <View className="h-3 w-3 rounded-full bg-[#58BCEB]"/>
            </View>
            <TouchableOpacity onPress={() => router.push({pathname: "../../[moduleScreen]", params: {module: item.id}})} activeOpacity={0.7} className="flex-3 justify-between h-28 w-60 my-2 px-4 py-6 rounded-2xl bg-[#0979BD] shadow-lg shadow-black">
              <View className="flex flex-row items-center gap-2">
                <Text className="text-3xl font-medium text-white items-center">{item.name}</Text>
                <IconClick height={25} width={25}/>
              </View>
              <Text className="text-lg font-normal text-white items-center">{item.description}</Text>
              <View className="before:h-20 before:rounded-b-xl before:w-10 before:bg-[#4697C8] before:absolute before:left-8 before:-z-10"/>
              <View className="after:h-20 after:rounded-t-xl after:w-10 after:bg-[#4697C8] after:absolute after:right-8 after:bottom-0 after:-z-10"/>
            </TouchableOpacity>
          </View>
        ) : (
          <View key={item.id} className="flex flex-row justify-between w-full -z-20">           
            <View className="flex-1 py-1 justify-between items-center">
              <View className="h-3 w-3 rounded-full bg-[#58BCEB]"/>
              <View className="h-3 w-3 rounded-full bg-[#58BCEB]"/>
              <View className="flex justify-center items-center h-7 w-7 rounded-full bg-[#0979BD]">
                <View className="h-3 w-3 rounded-full bg-[#DFE3E6]"/>
              </View>
              <View className="h-3 w-3 rounded-full bg-[#58BCEB]"/>
              <View className="h-3 w-3 rounded-full bg-[#58BCEB]"/>
            </View>
            <TouchableOpacity onPress={() => router.push({pathname: "../../[moduleScreen]", params: {module: item.id}})}  activeOpacity={0.7} key={item.id} className="flex justify-between h-28 w-60 my-2 px-4 py-6 rounded-2xl bg-[#DFE3E6] shadow-lg shadow-black">
              <View className="flex flex-row items-center gap-2">
                <Text className="text-3xl font-medium text-black items-center">{item.name}</Text> 
                <IconClickBlack height={25} width={25}/>
              </View>
              <Text className="text-lg font-normal text-black items-center">{item.description}</Text>
            </TouchableOpacity>
          </View>
        )
        ))}
      </View>
    </ScrollView>
  );
};

export default DashboardBody;
