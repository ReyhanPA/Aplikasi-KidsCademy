import { Tabs } from "expo-router";
import { BottomNavigator } from "../components";

const TabsLayout = () => {
  return (
    <Tabs tabBar={(props) => <BottomNavigator {...props}/>} >
      <Tabs.Screen name="dashboardScreen" options={{ title: "Dashboard", headerShown: false }} />
      <Tabs.Screen name="libraryScreen" options={{ title: "Library", headerShown: false }} />
      <Tabs.Screen name="storeScreen" options={{ title: "Store", headerShown: false }} />
      <Tabs.Screen name="profileScreen" options={{ title: "Profile", headerShown: false }} />
    </Tabs>
  );
};

export default TabsLayout;
