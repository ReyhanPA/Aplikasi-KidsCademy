import React, { useState } from "react";
import { View, Text, TouchableOpacity} from "react-native";
import { useNavigation } from '@react-navigation/native';

const ModuleBody = (props) => {
  const { selectedModule } = props;
  const [press, setPress] = useState("");
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const navigation = useNavigation();

  const handlePress = (opsi) => {
    setPress(opsi);
    if (press === opsi) {
      setPress("");
    }
  };

  const handleNext = () => {
    if (currentQuestionIndex < selectedModule.soal.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setPress("");
    } else {
      navigation.goBack();
    }
  };

  const currentQuestion = selectedModule.soal[currentQuestionIndex];

  return (
    <View className="flex-1 w-full h-full bg-white px-4">
      <Text className="text-xl font-semibold text-black my-4">Pilih jawaban yang tepat</Text>
      <View className="flex items-center w-full pb-4">
        <View className="flex justify-center items-center h-20 w-72 bg-[#53AC65] rounded-2xl mt-4 mb-12">
          <Text className="text-3xl font-medium text-white items-center">{currentQuestion.pertanyaan}</Text>
        </View>
        <View className="flex w-72 h-72 justify-between mx-4">
          <View className="flex flex-row justify-between">
            <TouchableOpacity onPress={() => handlePress("opsiA")} className={`flex justify-center items-center h-28 w-28 rounded-2xl border-2 ${press === "opsiA" ? 'border-[#53AC65]' : 'border-[#AFB1B2]'}`}>
              <Text className="text-3xl font-medium text-black items-center">{currentQuestion.opsiA}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handlePress("opsiB")} className={`flex justify-center items-center h-28 w-28 rounded-2xl border-2 ${press === "opsiB" ? 'border-[#53AC65]' : 'border-[#AFB1B2]'}`}>
              <Text className="text-3xl font-medium text-black items-center">{currentQuestion.opsiB}</Text>
            </TouchableOpacity>
          </View>
          <View className="flex flex-row justify-between">
            <TouchableOpacity onPress={() => handlePress("opsiC")} className={`flex justify-center items-center h-28 w-28 rounded-2xl border-2 ${press === "opsiC" ? 'border-[#53AC65]' : 'border-[#AFB1B2]'}`}>
              <Text className="text-3xl font-medium text-black items-center">{currentQuestion.opsiC}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handlePress("opsiD")} className={`flex justify-center items-center h-28 w-28 rounded-2xl border-2 ${press === "opsiD" ? 'border-[#53AC65]' : 'border-[#AFB1B2]'}`}>
              <Text className="text-3xl font-medium text-black items-center">{currentQuestion.opsiD}</Text>
            </TouchableOpacity>
          </View>
        </View>
        {currentQuestionIndex < selectedModule.soal.length - 1 ? (
          <TouchableOpacity disabled={press === ""} onPress={handleNext} className={`flex justify-center items-center h-14 w-72 rounded-full ${press !== "" ? "bg-[#1A8EFD]" : "bg-[#DFE3E6]"} shadow-lg shadow-black absolute -bottom-48`}>
            <Text className="text-2xl font-medium text-white items-center">Selanjutnya</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity disabled={press === ""} onPress={handleNext} className={`flex justify-center items-center h-14 w-72 rounded-full ${press !== "" ? "bg-[#1A8EFD]" : "bg-[#DFE3E6]"} shadow-lg shadow-black absolute -bottom-48`}>
            <Text className="text-2xl font-medium text-white items-center">Kumpulkan</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};


export default ModuleBody;
