import { Suspense } from "react";
import { colors } from "@/theme/colors";
import { Stack } from "expo-router";
import {
  useFonts,
  Inter_400Regular,
  Inter_500Medium,
  Inter_700Bold,
} from "@expo-google-fonts/inter";
import { Loading } from "@/components/loading";
import { SQLiteProvider } from "expo-sqlite";
import { migrate } from "@/database/migrate";

export default function Layout() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_700Bold,
  });

  if (!fontsLoaded) return <Loading />;

  return (
    <Suspense fallback={<Loading />}>
      <SQLiteProvider databaseName="targerts.db" onInit={migrate} useSuspense>
        <Stack
          screenOptions={{
            headerShown: false,
            contentStyle: { backgroundColor: colors.white },
          }}
        />
      </SQLiteProvider>
    </Suspense>
  );
}
