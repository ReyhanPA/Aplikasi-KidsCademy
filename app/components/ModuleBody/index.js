import React, { useState } from "react";
import { ScrollView, View, Text, TouchableOpacity, Modal, StyleSheet } from "react-native";
import { router } from "expo-router";
import { useAuth } from "../../../contexts/AuthProvider";
import firestore from "@react-native-firebase/firestore";

let totalBenar = 0;

const ModuleBody = (props) => {
  const { selectedModule } = props;

  const [press, setPress] = useState("");
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);
  const { user } = useAuth();

  const handlePress = (opsi) => {
    setPress(opsi);
    if (press === opsi) {
      setPress("");
    }
  };

  const handleNext = () => {
    if (press === selectedModule.soal[currentQuestionIndex].jawaban) {
      totalBenar++;
    }
    if (currentQuestionIndex < selectedModule.soal.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setPress("");
    } else {
      setModalVisible(true);
    }
  };

  const handleRetry = () => {
    totalBenar = 0;
    setCurrentQuestionIndex(0);
    setPress("");
    setModalVisible(false);
  };

  const handleNextModule = async () => {
    setModalVisible(false);
  
    try {
      const userRef = firestore().collection("users").doc(user.uid);
      const userDoc = await userRef.get();
      if (userDoc.exists) {
        const userData = userDoc.data();
        const moduleDone = userData.moduleDone || [];
        let xp = userData.xp || 0;
        let energi = userData.energi || 0;

        if (!moduleDone.includes(selectedModule.id)) {
          moduleDone.push(selectedModule.id);
          xp += totalBenar * 10;
          energi -= (5 - totalBenar) * 10;
        }

        await userRef.update({
          moduleDone,
          xp,
          energi
        });
      } else {
        console.error("No such document!");
      }
    } catch (error) {
      console.error("Error updating document: ", error);
    }

    totalBenar = 0;
    router.back();
  };
  

  const currentQuestion = selectedModule.soal[currentQuestionIndex];

  return (
    <ScrollView className="flex-1 w-full h-full bg-white px-4">
      <Text className="text-xl font-semibold text-black my-4">Pilih jawaban yang tepat</Text>
      <View className="flex items-center w-full pb-4">
        <Text className="text-xl font-semibold text-black">
          Soal {currentQuestionIndex + 1} dari {selectedModule.soal.length}
        </Text>
        <View className="flex justify-center items-center p-4 h-fit w-72 bg-[#53AC65] rounded-2xl mt-4 mb-12">
          <Text className="text-2xl font-medium text-white items-center">{currentQuestion.pertanyaan}</Text>
        </View>
        <View className="flex w-72 h-72 justify-between mx-4">
          <View className="flex flex-row justify-between">
            <TouchableOpacity onPress={() => handlePress("opsiA")} className={`flex p-2 justify-center items-center h-28 w-28 rounded-2xl border-2 ${press === "opsiA" ? "border-[#53AC65]" : "border-[#AFB1B2]"}`}>
              <Text className="text-xl font-medium text-black items-center">{currentQuestion.opsiA}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handlePress("opsiB")} className={`flex p-2 justify-center items-center h-28 w-28 rounded-2xl border-2 ${press === "opsiB" ? "border-[#53AC65]" : "border-[#AFB1B2]"}`}>
              <Text className="text-xl font-medium text-black items-center">{currentQuestion.opsiB}</Text>
            </TouchableOpacity>
          </View>
          <View className="flex flex-row justify-between">
            <TouchableOpacity onPress={() => handlePress("opsiC")} className={`flex p-2 justify-center items-center h-28 w-28 rounded-2xl border-2 ${press === "opsiC" ? "border-[#53AC65]" : "border-[#AFB1B2]"}`}>
              <Text className="text-xl font-medium text-black items-center">{currentQuestion.opsiC}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handlePress("opsiD")} className={`flex p-2 justify-center items-center h-28 w-28 rounded-2xl border-2 ${press === "opsiD" ? "border-[#53AC65]" : "border-[#AFB1B2]"}`}>
              <Text className="text-xl font-medium text-black items-center">{currentQuestion.opsiD}</Text>
            </TouchableOpacity>
          </View>
        </View>
        {currentQuestionIndex < selectedModule.soal.length - 1 ? (
          <TouchableOpacity disabled={press === ""} onPress={handleNext} className={`flex justify-center items-center h-14 w-72 mt-10 rounded-full ${press !== "" ? "bg-[#1A8EFD]" : "bg-[#DFE3E6]"} shadow-lg shadow-black`}>
            <Text className="text-2xl font-medium text-white items-center">Selanjutnya</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity disabled={press === ""} onPress={handleNext} className={`flex justify-center items-center h-14 w-72 mt-10 rounded-full ${press !== "" ? "bg-[#1A8EFD]" : "bg-[#DFE3E6]"} shadow-lg shadow-black`}>
            <Text className="text-2xl font-medium text-white items-center">Kumpulkan</Text>
          </TouchableOpacity>
        )}
      </View>
      <Modal transparent={true} visible={modalVisible} animationType="slide" onRequestClose={() => setModalVisible(false)}>
        <View style={styles.modalBackground}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>Selesai!</Text>
            <Text style={styles.modalMessage}>
              Anda berhasil menjawab {totalBenar} dari {selectedModule.soal.length} dengan benar.
            </Text>
            <View className="flex flex-row w-full justify-center">
              <TouchableOpacity className="shadow-md shadow-black" onPress={handleRetry} style={styles.modalButton}>
                <Text style={styles.modalButtonText}>Ulangi</Text>
              </TouchableOpacity>
              <TouchableOpacity className="shadow-md shadow-black" onPress={handleNextModule} style={styles.modalButton}>
                <Text style={styles.modalButtonText}>Lanjut</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContainer: {
    width: 300,
    padding: 20,
    backgroundColor: "white",
    borderRadius: 16,
    alignItems: "center",
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  modalMessage: {
    fontSize: 18,
    marginBottom: 16,
    textAlign: "center",
  },
  modalButton: {
    backgroundColor: "#1A8EFD",
    borderRadius: 100,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  modalButtonText: {
    fontSize: 18,
    color: "white",
  },
});

export default ModuleBody;
