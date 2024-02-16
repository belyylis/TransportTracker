import React, { useContext } from "react";
import { View } from "react-native";
import { TLocalizationContext } from "types";
import { LocalizationContext } from "context";
import { Localization } from "consts";
import styles from "./styles";
import BasicButton from "components/Buttons/BasicButton";

const SettingsScreen: React.FC = () => {
  const { toggleLanguage, language } = useContext(
    LocalizationContext
  ) as TLocalizationContext;

  return (
    <View style={styles.container}>
      <BasicButton
        title={Localization[language].switchLanguage}
        onPress={toggleLanguage}
      />
    </View>
  );
};

export default SettingsScreen;
