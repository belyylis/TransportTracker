import React, { useContext } from "react";
import { TDriver } from "types";
import { View, Text, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Categories, Localization } from "consts";
import { LocalizationContext } from "context";
import styles from "./styles";

type DriverCardProps = {
  item: TDriver;
  onPress: () => void;
};

const DriverCard: React.FC<DriverCardProps> = ({ item, onPress }) => {
  const { language } = useContext(LocalizationContext);

  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <LinearGradient
        start={{ x: 1, y: 1 }}
        end={{ x: 0, y: 0 }}
        style={styles.gradient}
        colors={Categories[item.category].colors}
      >
        <View style={styles.imageWrapper}>
          <View style={styles.iconWrapper}>
            {Categories[item.category].icon()}
          </View>
        </View>
        <View style={styles.infoWrapper}>
          <Text style={styles.category}>
            {Localization[language][item.category]}
          </Text>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.id}>ID: #{item.id}</Text>
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default DriverCard;
