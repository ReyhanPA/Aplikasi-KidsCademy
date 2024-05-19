import React, { useState } from "react";
import { View, Text, TouchableOpacity} from "react-native";

const ModuleBody = (props) => {
  const { selectedModule } = props;
  const [press, setPress] = useState("");

  const handlePress = (opsi) => {
    setPress(opsi);
    if (press === opsi) {
      setPress("");
    }
  };

  return (
    <View className="flex-1 w-full h-full bg-white px-4">
      <Text className="text-xl font-semibold text-black my-4">Pilih jawaban yang tepat</Text>
      <View className="flex items-center w-full pb-4">
        <View className="flex justify-center items-center h-20 w-72 bg-[#53AC65] rounded-2xl mt-4 mb-12">
          <Text className="text-3xl font-medium text-white items-center">{selectedModule.soal[0].pertanyaan}</Text>
        </View>
        <View className="flex w-72 h-72 justify-between mx-4">
          <View className="flex flex-row justify-between">
            <TouchableOpacity onPress={() => handlePress("opsiA")} className={`flex justify-center items-center h-28 w-28 rounded-2xl border-2 ${press === "opsiA" ? 'border-[#53AC65]' : 'border-[#AFB1B2]'}`}>
              <Text className="text-3xl font-medium text-black items-center">{selectedModule.soal[0].opsiA}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handlePress("opsiB")} className={`flex justify-center items-center h-28 w-28 rounded-2xl border-2 ${press === "opsiB" ? 'border-[#53AC65]' : 'border-[#AFB1B2]'}`}>
              <Text className="text-3xl font-medium text-black items-center">{selectedModule.soal[0].opsiB}</Text>
            </TouchableOpacity>
          </View>
          <View className="flex flex-row justify-between">
            <TouchableOpacity onPress={() => handlePress("opsiC")} className={`flex justify-center items-center h-28 w-28 rounded-2xl border-2 ${press === "opsiC" ? 'border-[#53AC65]' : 'border-[#AFB1B2]'}`}>
              <Text className="text-3xl font-medium text-black items-center">{selectedModule.soal[0].opsiC}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handlePress("opsiD")} className={`flex justify-center items-center h-28 w-28 rounded-2xl border-2 ${press === "opsiD" ? 'border-[#53AC65]' : 'border-[#AFB1B2]'}`}>
              <Text className="text-3xl font-medium text-black items-center">{selectedModule.soal[0].opsiD}</Text>
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity className="flex justify-center items-center h-14 w-72 rounded-full bg-[#1A8EFD] shadow-lg shadow-black absolute -bottom-48">
          <Text className="text-2xl font-medium text-white items-center">Selanjutnya</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};


export default ModuleBody;
