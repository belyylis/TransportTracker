import React, { useContext } from "react";
import { Text, View, Linking } from "react-native";
import { TDriver } from "types/Driver";
import { RouteProp } from "@react-navigation/native";
import MapView, { Marker, Region } from "react-native-maps";
import { Categories, GoogleMapStyle, Localization } from "consts";
import styles from "./styles";
import BasicButton from "components/Buttons/BasicButton";
import { LocalizationContext } from "context";

type DetailsScreenProps =
  | {
      route: RouteProp<{ params: TDriver }>;
    }
  | any;

const DetailsScreen: React.FC<DetailsScreenProps> = ({
  route,
}: DetailsScreenProps) => {
  const { language } = useContext(LocalizationContext);
  const item = route.params as TDriver;

  const initialRegion: Region = {
    latitude: item.coordinate.latitude,
    longitude: item.coordinate.longitude,
    latitudeDelta: 1.5,
    longitudeDelta: 1.5,
  };

  const callToPhone = () => {
    Linking.openURL(`tel:${item.phone}`);
  };

  const messageText =
    "Добрый день, подскажите пожалуйста, какой номер заказа у вас сейчас в работе?";

  const sendMessageToWhatsApp = () => {
    Linking.openURL(`whatsapp://send?text=${messageText}&phone=${item.phone}`);
  };

  return (
    <View style={styles.container}>
      <MapView
        initialRegion={initialRegion}
        customMapStyle={GoogleMapStyle}
        provider="google"
        style={styles.map}
      >
        <Marker coordinate={item.coordinate} style={styles.marker}>
          {Categories[item.category].icon()}
        </Marker>
      </MapView>
      <View style={styles.infoWrapper}>
        <Text style={styles.info}>
          <Text style={styles.bold}>{Localization[language].category} </Text>
          {Categories[item.category].title}
        </Text>
        <Text style={styles.info}>
          <Text style={styles.bold}>{Localization[language].name} </Text>
          {item.name}
        </Text>
        <Text style={styles.info}>
          <Text style={styles.bold}>{Localization[language].phone} </Text>
          {item.phone}
        </Text>
        <View style={styles.buttonsWrapper}>
          <BasicButton
            title={Localization[language].call}
            onPress={callToPhone}
          />
          <BasicButton
            title={Localization[language].send}
            onPress={sendMessageToWhatsApp}
          />
        </View>
      </View>
    </View>
  );
};

export default DetailsScreen;
