import { Stack, Redirect } from "expo-router";
import { useAuth } from "../../contexts/AuthProvider";

const ModuleLayout = () => {
  const { isLogin } = useAuth();
  if (!isLogin) {
    return (
      <Redirect href="../(authScreen)/loginScreen" />
    )
  }

  return (
    <Stack >
      <Stack.Screen
        name="[moduleQuestion]"
        options={{
          title: "Module",
          headerShown: false,
        }}
      />
    </Stack>
  );
};

export default ModuleLayout;
