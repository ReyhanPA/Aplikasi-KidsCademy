import React from "react";
import { ScrollView, View, Text } from "react-native";
import { IconArrowFill, IconClock, IconProfilePicture } from "../../../assets/icon";

const getColorByRank = (rank) => {
  switch (rank) {
    case 1:
      return "#FFFA87";
    case 2:
      return "#AFB1B2";
    case 3:
      return "#FBA319";
    default:
      return "#FFFFFF";
  }
};

const LeaderboardBody = (props) => {
  const { data } = props;

  return (
    <View className="flex-1 w-full h-full bg-white">
      <View className="flex flex-row w-full h-auto p-4">
        <View className="flex-1 items-center justify-center h-20 rounded-l-2xl border-l-2 border-y-2 border-[#898787]">
          <Text className="text-xl font-medium text-[#969696]">Hari ini</Text>
          <View className="flex flex-row items-ceter justify-center gap-2 pr-2">
            <IconArrowFill height={25} width={25} />
            <Text className="text-xl font-medium text-black">1 posisi</Text>
          </View>
        </View>
        <View className="flex-1 items-center justify-center h-20 rounded-r-2xl border-2 border-[#898787]">
          <Text className="text-xl font-medium text-[#969696]">Sisa waktu</Text>
          <View className="flex flex-row items-ceter justify-center gap-2 pr-2">
            <IconClock height={25} width={25} />
            <Text className="text-xl font-medium text-black">6 hari</Text>
          </View>
        </View>
      </View>
      <ScrollView className="flex w-full h-auto border-t bg-white border-[#969696] py-4">
        {data.map((item) => (
          <View key={item.id} className={`flex flex-row items-center justify-between mb-3 ${item.username === "Putranto" ? "mx-2 px-2 border border-[#969696] bg-white shadow-md shadow-black rounded-xl" : "mx-4"}`}>
            <View className="flex flex-row justify-center items-center">
              <View className="flex justify-center items-center h-10 w-10 rounded-full mr-2" style={{ backgroundColor: getColorByRank(item.ranking) }}>
                <Text className="text-xl font-medium text-black">{item.ranking}</Text>
              </View>
              <IconProfilePicture height={45} width={45} />
              <Text className="text-xl font-medium text-black ml-2">{item.username}</Text>
            </View>
            <View>
              <Text className="text-xl font-normal text-black">{item.xp} XP</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default LeaderboardBody;
