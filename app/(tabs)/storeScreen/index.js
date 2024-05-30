import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, Modal, StyleSheet } from "react-native";
import { IconDoubleElecttrify } from "../../../assets/icon";
import { SafeAreaView } from "react-native-safe-area-context";
import { useAuth } from "../../../contexts/AuthProvider";
import firestore from "@react-native-firebase/firestore";

const energiList = [
  {
    id: 1,
    energi: 200,
    harga: "15000",
  },
  {
    id: 2,
    energi: 150,
    harga: "13500",
  },
  {
    id: 3,
    energi: 100,
    harga: "10000",
  },
  {
    id: 4,
    energi: 50,
    harga: "5000",
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

const StoreItemCard = ({ id, title, desc, setModalVisible, setCurrentId }) => {
  const [isPressed, setIsPressed] = useState(false);
  const handlePress = () => {
    setIsPressed(!isPressed);
    setCurrentId(id);
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
  const [currentId, setCurrentId] = useState(null);

  const handleYa = () => {
    if (data.saldo > energiList[currentId - 1].harga) {
      const updateUserData = async () => {
        try {
          const userRef = firestore().collection("users").doc(user.uid);
          const userDoc = await userRef.get();
  
          if (userDoc.exists) {
            const userData = userDoc.data();
            console.log("Current user data: ", userData);
  
            const updatedEnergi = userData.energi + energiList[currentId - 1].energi;
            const updatedSaldo = userData.saldo - energiList[currentId - 1].harga;
  
            userData.energi = updatedEnergi;
            userData.saldo = updatedSaldo;
  
            console.log("Updated user data: ", userData);
  
            await userRef.update(userData);
            console.log("User data successfully updated");
  
            // Update the state directly here
            setData(prevData => ({
              ...prevData,
              energi: updatedEnergi,
              saldo: updatedSaldo
            }));
          } else {
            console.error("No such document!");
          }
        } catch (error) {
          console.error("Error updating data: ", error);
        }
      }
  
      updateUserData().then(() => {
        setModalVisible(false);
        setCurrentId(null);
      }).catch((error) => {
        console.error("Error in updateUserData: ", error);
      });
    } else {
      alert("Saldo tidak mencukupi");
    }
  };
  
  const handleTidak = () => {
    setModalVisible(false);
    setCurrentId(null);
  };
  
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const { isLogin, signOut, user } = useAuth();
  
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        if (user && user.uid && isLogin) {
          const userRef = firestore().collection("users").doc(user.uid);
          const docSnapshot = await userRef.get();
          if (docSnapshot.exists) {
            setData({ id: docSnapshot.id, ...docSnapshot.data() });
          } else {
            console.error("No such document!");
          }
        }
      } catch (error) {
        console.error("Error fetching data: ", error);
      } finally {
        setLoading(false);
      }
    };
  
    fetchData();
  }, [user]);  

  return (
    <SafeAreaView className="flex py-2 bg-white flex-column">
      <View className="h-2/6" dir="ltr">
        <Text className="text-xl mx-4 my-2 font-semibold text-black">Store</Text>
        <View className="flex justify-center items-center">
          {isLogin ? (
            data.energi <= 0 ? (
              <CardWarning isEnoughEnergy={false} title="Energimu Habis" content="kamu bisa mengisinya dengan membeli atau menunggu 10 energi tambahan setiap 30 menit." />
            ) : (
              <CardWarning isEnoughEnergy={true} title="Energimu masih ada" content="Selamat bermain dan jangan lupa mengisinya saat energimu mulai habis ya!" />
            )
          ) : (
              <CardWarning isEnoughEnergy={true} title="Anda belum login" content="Silahkan login terlebih dahulu untuk melakukan pembelian energi" />        
          )}
        </View>
        <View className="flex-row justify-center items-center">
          {isLogin ? ( 
            <><StoreStats title={data.energi} desc="Energi" /><StoreStats title={data.saldo} desc="Saldo" /></>
          ) : (
            <><StoreStats title="-" desc="Energi" /><StoreStats title="-" desc="Saldo" /></>
          )}
        </View>
      </View>
      <View className="h-4/6 mt-8 flex-wrap items-center justify-center flex-row">
        {energiList.map((item) => (
          <StoreItemCard key={item.id} id={item.id} title={item.energi} desc={item.harga} setModalVisible={setModalVisible} setCurrentId={setCurrentId}/>
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
