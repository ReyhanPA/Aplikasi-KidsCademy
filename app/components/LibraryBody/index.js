import React from "react";
import { View, ScrollView, Text, TouchableOpacity } from "react-native";
import { router } from "expo-router";
import { IconHurufButton, IconBacaButton, IconHitungButton, IconLogikaButton, IconHiburanButton } from "../../../assets/icon";

const subject = [
  {
    id: 1,
    name: "Huruf",
    color: "#1A8EFD",
  },
  {
    id: 2,
    name: "Baca",
    color: "#F9AE2B",
  },
  {
    id: 3,
    name: "Hitung",
    color: "#53AC65",
  },
  {
    id: 4,
    name: "Hiburan",
    color: "#f57180",
  },
];

const renderIconLibrary = (Icon) => {
  if (Icon === "Huruf") {
    return <IconHurufButton height={80} width={80} />;
  } else if (Icon === "Baca") {
    return <IconBacaButton height={80} width={80} />;
  } else if (Icon === "Hitung") {
    return <IconHitungButton height={80} width={80} />;
  } else if (Icon === "Logika") {
    return <IconLogikaButton height={80} width={80} />;
  } else if (Icon === "Hiburan") {
    return <IconHiburanButton height={80} width={80} />;
  }
};
const LibraryBody = () => {
  return (
    <ScrollView className="flex-1 h-full w-full bg-white px-4">
      <Text className="text-xl font-semibold text-black">Library</Text>
      <View className="flex justify-center items-center">
        {subject.map((item) => (
          <TouchableOpacity
            onPress={() => router.navigate({ pathname: "../../(tabs)/libraryScreen/[subjectScreen]", params: { subject: item.name } })}
            activeOpacity={0.7}
            key={item.id}
            style={{ backgroundColor: item.color }}
            className={`flex justify-center items-start h-[150px] w-5/6 my-2 rounded-2xl shadow-md shadow-black`}
          >
            <Text className="text-4xl font-medium text-white ml-36">{item.name}</Text>
            <View className="after:h-6 after:rounded-t-full after:w-12 after:bg-[#FFFFFF] after:absolute after:right-5 after:bottom-0 after:-z-10" />
            <View className="after:h-10 after:rounded-r-full after:w-5 after:bg-[#FFFFFF] after:absolute after:left-0 after:top-8 after:-z-10" />
            <View className="after:h-6 after:rounded-b-full after:w-12 after:bg-[#FFFFFF] after:absolute after:right-12 after:top-0 after:-z-10" />
            <View className="after:h-24 after:rounded-xl after:w-24 after:bg-[#FFFFFF] after:absolute after:left-8 after:top-7 after:-z-10 after:flex after:justify-center after:items-center">{renderIconLibrary(item.name)}</View>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

export default LibraryBody;
