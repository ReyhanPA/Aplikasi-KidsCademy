import React, { useState } from "react";
import { Text, TouchableOpacity, View, StyleSheet, Modal } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { IconProfilePicture, IconElectrifity, IconMedal, IconMoney, IconPerson, IconXP } from "../../../assets";
import { router } from "expo-router";
import { useAuth } from "../../../contexts/AuthProvider";

const ProfileStats = () => {
  return (
    <View className="flex-row flex-wrap justify-center items-center">
      <StatsItem title="1000" desc="Total XP" img="XP" />
      <StatsItem title="3" desc="Ranking" img="Ranking" />
      <StatsItem title="100" desc="Energi" img="Energi" />
      <StatsItem title="15000" desc="Saldo" img="Saldo" />
    </View>
  );
};

const Profile = ({ name, username, isLogin, setModalVisible }) => {
  return (
    <View className="flex-col mt-4 h-64 items-center bg-[#EFF9FF] justify-between p-4 border-b border-t border-gray-300">
      {isLogin ? (
        <View className="flex flex-col items-center">
          <View className="flex flex-row w-full h-1/2 items-center justify-between px-2">
            <View className="w-48 h-16 my-2">
              <Text className="text-3xl font-bold">{name}</Text>
              <Text className="text-sm text-gray-600">{username}</Text>
            </View>
            <View className="border-solid bg-white border border-[#AFB1B2]">
              <IconProfilePicture height={100} width={100} />
            </View>
          </View>
          <View className="flex flex-row h-1/2 items-center">
            <OutAccountButton isLogin={isLogin} setModalVisible={setModalVisible}/>
          </View>
        </View>
      ) : (
        <View className="flex flex-col items-center">
          <View className="flex flex-row w-full h-1/2 items-center justify-between px-2">
            <View className="w-48 my-2">
              <Text className="text-3xl font-bold">Kamu belum login</Text>
            </View>
            <View className="border-solid bg-white border border-[#AFB1B2]">
              <IconProfilePicture height={100} width={100} />
            </View>
          </View>
          <View className="flex flex-row h-1/2 items-center">
            <OutAccountButton isLogin={isLogin} setModalVisible={setModalVisible}/>
          </View>
        </View>
      )}
    </View>
  );
};

const OutAccountButton = ({ isLogin, setModalVisible }) => {
  return (
    <TouchableOpacity onPress={() => isLogin ? setModalVisible(true) : router.push({ pathname: "../../../(authScreen)/loginScreen" })}>
      <View className="flex flex-row w-36 h-10 border-[#19467E] bg-white border rounded-2xl justify-center px-2">
        <View className="w-2/6 justify-center items-center">
          <IconPerson height={36} width={36} />
        </View>
        <View className="w-4/6 justify-center items-center">
          {isLogin ? (
            <Text className="text-md text-center text-black font-semibold">Keluar Akun</Text>
          ) : (
            <Text className="text-md text-center text-black font-semibold">Masuk Akun</Text>
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
};

const StatsItem = ({ title, desc, img }) => {
  return (
    <View className="flex flex-row w-40 h-16 mx-4 my-4 bg-white border-[#AFB1B2] border-2 rounded-2xl justify-center items-center">
      <View className="w-2/6 px-5" dir="ltr">
        {getIcon(img)}
      </View>
      <View className="w-4/6 mx-2" dir="ltr">
        <Text className="text-black text-md font-bold">{title}</Text>
        <Text className="text-sm font-semibold text-[#AFB1B2]">{desc}</Text>
      </View>
    </View>
  );
};

const getIcon = (icon) => {
  switch (icon) {
    case "XP":
      return <IconXP height={28} width={28} />;
    case "Ranking":
      return <IconMedal height={28} width={28} />;
    case "Energi":
      return <IconElectrifity height={28} width={28} />;
    case "Saldo":
      return <IconMoney height={28} width={28} />;
    default:
      return <IconXP height={28} width={28} />;
  }
};

const ProfileScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const { isLogin, signOut } = useAuth();

  const handleYa = () => {
    setModalVisible(false);
    signOut();
  };
  
  const handleTidak = () => {
    setModalVisible(false);
  };

  return (
    <SafeAreaView className="flex-1 py-2 bg-white">
      {isLogin ? (
        <View>
          <View className="h-1/2" dir="ltr">
            <View>
              <Text className="text-xl my-2 mx-4 font-bold">Profile</Text>
              <Profile name="Putranto" username="putrantoguboy" isLogin={isLogin} setModalVisible={setModalVisible}/>
            </View>
          </View>
          <View className="h-1/2" dir="ltr">
            <Text className="text-xl mx-4 font-bold">Statistik</Text>
            <View>
              <ProfileStats></ProfileStats>
            </View>
          </View>
        </View>
      ) : (
        <View>
          <View className="h-1/2" dir="ltr">
            <View>
              <Text className="text-xl my-2 mx-4 font-bold">Profile</Text>
              <Profile name="" username="" isLogin={isLogin} setModalVisible={setModalVisible}/>
            </View>
          </View>
        </View>
      )}
      <Modal
        transparent={true}
        visible={modalVisible}
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}>
        <View style={styles.modalBackground}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>Apakah yakin keluar akun?</Text>
            <View className="flex flex-row w-full justify-center">
              <TouchableOpacity className="shadow-md shadow-black" onPress={() => handleYa()} style={styles.modalButton}>
                <Text style={styles.modalButtonText}>Ya</Text>
              </TouchableOpacity>
              <TouchableOpacity className="shadow-md shadow-black" onPress={() => handleTidak()} style={styles.modalButton}>
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

export default ProfileScreen;
