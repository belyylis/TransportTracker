import React from "react";
import { TouchableOpacity, Text } from "react-native";
import styles from "./styles";

type BasicButtonProps = {
  title: string;
  onPress: () => void;
  backgroundColor?: string;
  textColor?: string;
};

const BasicButton: React.FC<BasicButtonProps> = ({ title, onPress }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={styles.container}
      onPress={onPress}
    >
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

export default BasicButton;
