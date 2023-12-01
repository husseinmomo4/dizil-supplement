import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import CountryPicker, { Flag } from 'react-native-country-picker-modal';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const HomeScreen = ({ navigation }) => {
  const data1 = [
    { imageUrl: 'https://www.bodyandfit.com/medias/ON-HEADER-mobile-666x450-surprise-4-.png?context=bWFzdGVyfHJvb3R8NDYzMjc3fGltYWdlL3BuZ3xoODAvaGRjLzkzODc0NTE5NDA4OTQucG5nfDNmODA0ZTUyZTFjMjA4Mjc2NzkwZWY1MjQ3NDUyNzkzNzFhMWIxN2VmZjAxMGRhN2RiN2FlZjAzN2I0MzgzZjI' },
    { imageUrl: 'https://img10.hkrtcdn.com/11792/bnr_1179159_o.jpg' },
    { imageUrl: 'https://www.gosupps.com/media/mbimages/r/e/redrex_big_ramy_labs_main_banner_new-min.jpg' },
    { imageUrl: 'https://m.media-amazon.com/images/I/91harzYxNWL._AC_UF1000,1000_QL80_.jpg' },
    // Add more image objects as needed
  ];

  const [modalVisible, setModalVisible] = useState(false);
  const [countryCode, setCountryCode] = useState('EG');
  const [countryName, setCountryName] = useState('Egypt');

  const onSelect = (country) => {
    setCountryCode(country.cca2);
    setCountryName(country.name);
    setModalVisible(false);
    // You can perform additional actions with the selected country here
  };

  const renderItem = ({ item }) => (
    <View style={styles.carouselItem}>
      <Image source={{ uri: item.imageUrl }} style={styles.image} />
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={require('../../assets/Dizil.jpg')} style={styles.headerImage} />
      </View>

      <View style={styles.flagContainer}>
        <TouchableOpacity style={styles.flagButton} onPress={() => setModalVisible(true)}>
          <Flag countryCode={countryCode} size={39} />
          <View style={styles.countryNameContainer}>
            <Text style={styles.countryNameText}>{countryName}</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.cartIconContainer}>
        <MaterialCommunityIcons name="cart-variant" size={28} color="black" onPress={() => navigation.navigate('Cart')} />
      </View>

      <Carousel
        data={data1}
        renderItem={renderItem}
        sliderWidth={390}
        itemWidth={300}
        layout="default"
        loop
        autoplay
        autoplayInterval={4000}
      />

      <CountryPicker
        visible={modalVisible}
        withFilter
        withFlag
        withAlphaFilter
        withCountryNameButton
        onSelect={onSelect}
        onClose={() => setModalVisible(false)}
        placeholder=""
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    marginBottom: 10,
  },
  headerImage: {
    height: 140,
    width: 360,
    resizeMode: 'stretch',
  },
  flagContainer: {
    backgroundColor: '#cfcfcf',
    width: 360,
    height: 30,
    bottom: 10,
    flexDirection: 'row',
  },
  flagButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 19,
  },
  countryNameContainer: {
    marginLeft: -8,
    margin: 6,
  },
  countryNameText: {
    fontSize: 14,
    color: 'black',
  },
  carouselItem: {
    width: 320,
    height: 320,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cartIconContainer: {
    flexDirection: 'row',
    position: 'absolute',
    right: 10,
    top: 10,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
    marginRight: 19,
  },
});

export default HomeScreen;
