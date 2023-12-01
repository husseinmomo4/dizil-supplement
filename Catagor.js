import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import Carousel from 'react-native-snap-carousel';

const Catagor = () => {

  const data1 = [
    { imageUrl: 'https://www.bodyandfit.com/medias/ON-HEADER-mobile-666x450-surprise-4-.png?context=bWFzdGVyfHJvb3R8NDYzMjc3fGltYWdlL3BuZ3xoODAvaGRjLzkzODc0NTE5NDA4OTQucG5nfDNmODA0ZTUyZTFjMjA4Mjc2NzkwZWY1MjQ3NDUyNzkzNzFhMWIxN2VmZjAxMGRhN2RiN2FlZjAzN2I0MzgzZjI' },
    { imageUrl: 'https://img10.hkrtcdn.com/11792/bnr_1179159_o.jpg' },
    { imageUrl: 'https://www.gosupps.com/media/mbimages/r/e/redrex_big_ramy_labs_main_banner_new-min.jpg' },
    { imageUrl: "https://m.media-amazon.com/images/I/91harzYxNWL._AC_UF1000,1000_QL80_.jpg" },
    // Add more image objects as needed
  ];


  const renderItem = ({ item }) => (
    <View style={styles.carouselItem}>
      <Image source={{ uri: item.imageUrl }} style={styles.image} />
    </View>
  );

  return (
    <View style={styles.container}>
      <Carousel
        data={data1}
        renderItem={renderItem}
        sliderWidth={390}
        itemWidth={300} // Adjust to take half of the screen
        layout="default"
        loop
        autoplay
        autoplayInterval={4000} 
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,
    marginRight: 45
  },
  carouselItem: {
    width: 320,
    height: 320,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
});

export default Catagor;
