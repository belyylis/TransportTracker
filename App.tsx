import { useCallback, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Palette } from "consts";
import { MainStackNavigator } from "navigators";
import { StatusBar } from "react-native";
import { LocalizationContext } from "./src/context";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export default function App() {
  const [language, setLanguage] = useState<"ru" | "en">("ru");

  const toggleLanguage = useCallback(() => {
    setLanguage((prev) => (prev === "ru" ? "en" : "ru"));
  }, [language]);

  return (
    <QueryClientProvider client={queryClient}>
      <LocalizationContext.Provider
        value={{
          language,
          toggleLanguage,
        }}
      >
        <NavigationContainer>
          <MainStackNavigator />
          <StatusBar barStyle="dark-content" backgroundColor={Palette.WHITE} />
        </NavigationContainer>
      </LocalizationContext.Provider>
    </QueryClientProvider>
  );
}
