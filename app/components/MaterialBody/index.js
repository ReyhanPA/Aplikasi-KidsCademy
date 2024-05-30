import { useLocalSearchParams } from "expo-router";
import React from "react";
import { ScrollView, Text, View } from "react-native";
import YoutubePlayer from "react-native-youtube-iframe";

const MaterialBody = () => {
  const item = useLocalSearchParams();

  return (
    <ScrollView className="flex-1 h-full w-full bg-white px-4 ">
      <Text className="text-xl text-black mb-4">Video {item.name}</Text>
      <View className="h-[240px] border-8 border-stone-500">
        <YoutubePlayer 
        height={205}
        play={true}
        videoId={item.idVideo}
        />
        <View className="h-[20px] bg-slate-800 border-2 border-gray-300">
        </View>
      </View>
      <View className="mx-auto h-[20px] w-[60px] bg-stone-500 border-2 border-gray-300">
      </View>
      <View className="mx-auto h-[20px] w-[160px] bg-slate-800 border-2 border-gray-300 rounded-t-xl">
      </View>
    </ScrollView>
  );
};

export default MaterialBody;
