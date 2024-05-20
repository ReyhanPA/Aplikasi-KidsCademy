import { Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  IconDoubleElecttrify,
  IconElectrifity,
  IconMedal,
  IconMoney,
  IconPerson,
  IconXP,
} from "../../../assets/icon";
import { router } from "expo-router";

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
  return (
    <SafeAreaView className="flex-1 py-2 bg-white">
      <View className="h-1/2" dir="ltr">
        <View>
          <Text className="text-xl my-2 mx-4 font-bold">Profile</Text>
          <Profile name="Putranto" username="putrantoguboy" />
        </View>
      </View>
      <View className="h-1/2" dir="ltr">
        <Text className="text-xl mx-4 font-bold">Statistik</Text>
        <View>
          <ProfileStats></ProfileStats>
        </View>
      </View>
    </SafeAreaView>
  );
};

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

const Profile = ({ name, username }) => {
  return (
    <View className="flex-col mt-4 h-64 items-center bg-[#EFF9FF] justify-between p-4 border-b border-t border-gray-300">
      <View className="flex flex-col items-center">
        <View className="flex flex-row h-1/2 items-center">
          <View className="w-48 h-16 mx-8 my-2">
            <Text className="text-3xl font-bold">{name}</Text>
            <Text className="text-sm text-gray-600">{username}</Text>
          </View>
          <View className="border-solid border-2 rounded-3xl">
            <IconDoubleElecttrify height={100} width={100} />
          </View>
        </View>
        <View className="flex flex-row h-1/2 items-center">
          <OutAccountButton></OutAccountButton>
        </View>
      </View>
    </View>
  );
};

const OutAccountButton = () => {
  return (
    <TouchableOpacity
      onPress={() =>
        router.push({ pathname: "../../../(authScreen)/loginScreen" })
      }
    >
      <View className="flex flex-row w-52 h-10 border-slate-400 border-2 rounded-2xl justify-center">
        <View className="w-2/6 justify-center items-center">
          <IconPerson height={36} width={36}></IconPerson>
        </View>
        <View className="w-4/6 justify-center items-center">
          <Text className="text-md text-center text-black font-semibold">
            Keluar Akun
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const StatsItem = ({ title, desc, img }) => {
  return (
    <View className="flex flex-row w-40 h-16 mx-4 my-4 bg-white border-slate-300 border-2 rounded-2xl justify-center items-center">
      <View className="w-2/6 px-3" dir="ltr">
        {getIcon(img)}
      </View>
      <View className="w-4/6 mx-2" dir="ltr">
        <Text className="text-black text-md font-bold">{title}</Text>
        <Text className="text-black text-sm text-slate-400">{desc}</Text>
      </View>
    </View>
  );
};

export default ProfileScreen;
