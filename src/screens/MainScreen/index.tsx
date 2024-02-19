import React, { useContext, useMemo, useState } from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import MapView from "react-native-map-clustering";
import { Marker, Region } from "react-native-maps";
import AntDesign from "@expo/vector-icons/AntDesign";
import styles from "./styles";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  Layout,
  Screens,
  GoogleMapStyle,
  Palette,
  Categories,
  Localization,
} from "consts";
import { StackNavigationProp } from "@react-navigation/stack";
import Checkbox from "expo-checkbox";
import { useQuery } from "@tanstack/react-query";
import DriverCard from "components/Cards/DriverCard";
import { TCategory, TDriver } from "types";
import { LocalizationContext } from "context";
import { DriversAPI } from "api";

const initialRegion = {
  latitude: 41,
  longitude: 41,
  latitudeDelta: 3.5,
  longitudeDelta: 3.5,
};

const edges = {
  top: 50,
  bottom: 50,
  left: Layout.W * 0.25 + 50,
  right: Layout.W * 0.25 + 50,
};

type MainScreenProps = {
  navigation: StackNavigationProp<any>;
};

const MainScreen: React.FC<MainScreenProps> = ({ navigation }) => {
  const query = useQuery({
    queryKey: ["drivers"],
    queryFn: DriversAPI.getDrivers,
  });

  const { language } = useContext(LocalizationContext);
  const [listMode, setListMode] = useState(true);
  const [lastRegion, setLastRegion] = useState<Region>();
  const [isVisibleFilter, setIsVisibleFilter] = useState(false);
  const [filter, setFilter] = useState({
    bus: true,
    lorry: true,
    special: true,
  });

  const filteredData = useMemo(() => {
    return query.data?.filter((item) => filter[item.category]);
  }, [filter, setFilter, query]);

  const toggleScreenMode = () => {
    setListMode((prev) => !prev);
  };
  const toggleFilter = () => {
    setIsVisibleFilter((prev) => !prev);
  };
  const setFilterSelect = (item: TCategory) => {
    setFilter((prev) => ({
      ...prev,
      [item]: !filter[item],
    }));
  };

  const navigateToSettings = () => {
    navigation.navigate(Screens.SettingsScreen);
  };
  const navigateToDetails = (item: TDriver) => {
    navigation.navigate(Screens.DetailsScreen, item);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={toggleFilter}>
          <AntDesign
            color={Palette.BLACK}
            name="filter"
            size={Layout.H * 0.025}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={toggleScreenMode}>
          <Text style={styles.status}>
            {listMode
              ? Localization[language].showMap
              : Localization[language].showList}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={navigateToSettings}>
          <AntDesign
            color={Palette.BLACK}
            name="setting"
            size={Layout.H * 0.025}
          />
        </TouchableOpacity>
      </View>
      {listMode ? (
        <FlatList
          numColumns={2}
          initialNumToRender={8}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => String(item.id)}
          contentContainerStyle={styles.listWrapper}
          data={filteredData}
          renderItem={({ item }) => (
            <DriverCard item={item} onPress={() => navigateToDetails(item)} />
          )}
        />
      ) : (
        <MapView
          initialRegion={lastRegion || initialRegion}
          onRegionChangeComplete={(region) => {
            setLastRegion(region);
          }}
          clusterColor={Palette.CLUSTER}
          customMapStyle={GoogleMapStyle}
          edgePadding={edges}
          provider="google"
          style={styles.map}
        >
          {filteredData &&
            filteredData.map((item) => (
              <Marker
                key={item.id}
                coordinate={item.coordinate}
                style={{ width: 70, height: 60 }}
                onPress={() => navigateToDetails(item)}
              >
                {/* 
              Создание кастомных компонентов внутри Marker замедляет работу карты. 
              Это не рекомендуется использовать, если на карте большое количество элементов.
              Чтобы сделать карту плавной с кастомными иконками нужно использовать свойство image.
              Но так как размеры экранов у всех разными, а создание иконок под каждое разрешение требует много времени,
              я сделал просто кастомный элемент. Вообще по уму сделать папки ld, md, hd, xhd, xxhd и туда закинуть картинки
              формата .png, тогда катра будет работать "нативно" (в 10 раз плавнее визуально). Я так уже делал, но для тестового смысла особо нет, главное это понимать.
              */}
                {Categories[item.category].icon()}
              </Marker>
            ))}
        </MapView>
      )}
      {isVisibleFilter && (
        <View style={styles.filterWrapper}>
          <Text style={styles.filterTitle}>
            {Localization[language].filter}
          </Text>
          <View style={styles.selector}>
            {Object.keys(filter).map((item) => (
              <TouchableOpacity
                key={item}
                style={styles.select}
                onPress={() => setFilterSelect(item as TCategory)}
              >
                <View style={styles.iconWrapper}>
                  {Categories[item as TCategory].icon()}
                </View>
                <Checkbox
                  color={Categories[item as TCategory].colors[0]}
                  value={filter[item as TCategory]}
                />
              </TouchableOpacity>
            ))}
          </View>
        </View>
      )}
    </SafeAreaView>
  );
};

export default MainScreen;
