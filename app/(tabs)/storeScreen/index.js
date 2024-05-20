import React, { useState } from "react";
import { View, Text, TouchableOpacity, Modal, StyleSheet } from "react-native";
import { IconDoubleElecttrify } from "../../../assets/icon";
import { SafeAreaView } from "react-native-safe-area-context";

const data = [
  {
    id: 1,
    energi: 200,
    harga: "15.000",
  },
  {
    id: 2,
    energi: 150,
    harga: "13.500",
  },
  {
    id: 3,
    energi: 100,
    harga: "10.000",
  },
  {
    id: 4,
    energi: 50,
    harga: "5.000",
  },
];

const StoreStats = ({ title, desc }) => {
  return (
    <View className="w-32 h-16 mx-8 my-2 bg-[#EFF9FF] border-solid border-2 border-slate-400 rounded-2xl justify-center pl-4">
      <Text className="text-black text-md font-bold">{title}</Text>
      <Text className="text-slate-500 text-sm">{desc}</Text>
    </View>
  );
};

const StoreItemCard = ({ id, title, desc, setModalVisible }) => {
  const [isPressed, setIsPressed] = useState(false);
  const handlePress = () => {
    setIsPressed(!isPressed);
    setModalVisible(true);
  };

  return (
    <View key={id}>
      <TouchableOpacity onPress={handlePress} underlayColor="transparent">
        <View className="w-32 h-32 mx-8 my-8 bg-white border-solid border-2 rounded-2xl items-center">
          <IconDoubleElecttrify height={60} width={60} />
          <Text className="text-lg font-bold">{title}</Text>
          <Text className="text-gray-600 text-md text-center">Rp {desc}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const CardWarning = ({ title, content, isEnoughEnergy }) => {
  return (
    <View className={`w-72 h-32 mx-16 my-4 rounded-3xl border-solid border-4 border-yellow-600 p-4 ${isEnoughEnergy ? "bg-blue-300 border-blue-500" : "bg-yellow-500 border-yellow-600"}`}>
      <Text className="text-xl text-center font-bold mb-2">{title}</Text>
      <Text className="text-black text-md text-center">{content}</Text>
      <View className="w-4 mx-4 my-24 before:block before:absolute bg-yellow-200 h-2 rounded-lg"></View>
      <View className="w-5 mx-48 my-1 before:block before:absolute bg-yellow-100 h-2 rounded-lg"></View>
      <View className="w-10 mx-56 my-10 before:block before:absolute bg-yellow-300 h-4 rounded-lg"></View>
    </View>
  );
};

const StoreScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  var energi = 70;

  const handleYa = () => {
    setModalVisible(false);
  };
  
  const handleTidak = () => {
    setModalVisible(false);
  };

  return (
    <SafeAreaView className="flex py-2 bg-white flex-column">
      <View className="h-2/6" dir="ltr">
        <Text className="text-xl mx-4 my-2 font-semibold text-black">Store</Text>
        <View className="flex justify-center items-center">
          {energi < 90 ? (
            <CardWarning isEnoughEnergy={false} title="Energimu Habis" content="kamu bisa mengisinya dengan membeli atau menunggu 10 energi tambahan setiap 30 menit." />
          ) : (
            <CardWarning isEnoughEnergy={true} title="Energimu masih ada" content="Selamat bermain dan jangan lupa mengisinya saat energimu mulai habis ya!" />
          )}
        </View>
        <View className="flex-row justify-center items-center">
          <StoreStats title="0" desc="Energi" />
          <StoreStats title="Rp.100.000" desc="Saldo" />
        </View>
      </View>
      <View className="h-4/6 mt-8 flex-wrap items-center justify-center flex-row">
        {data.map((item) => (
          <StoreItemCard key={item.id} id={item.id} title={item.energi} desc={item.harga} setModalVisible={setModalVisible}/>
        ))}
      </View>
      <Modal
        transparent={true}
        visible={modalVisible}
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}>
        <View style={styles.modalBackground}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>Apakah yakin membeli?</Text>
            <View className="flex flex-row w-full justify-center">
              <TouchableOpacity className="shadow-md shadow-black" onPress={() => handleYa({ setModalVisible })} style={styles.modalButton}>
                <Text style={styles.modalButtonText}>Ya</Text>
              </TouchableOpacity>
              <TouchableOpacity className="shadow-md shadow-black" onPress={() => handleTidak({ setModalVisible })} style={styles.modalButton}>
                <Text style={styles.modalButtonText}>Tidak</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
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

export default StoreScreen;
