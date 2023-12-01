import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';

const CatagoriDetails = ({ route }) => {
  const { item } = route.params || { item: null };
  const [activeSlide, setActiveSlide] = React.useState(0);

  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      {item ? (
        <>
          <Carousel
            data={item.imageR}
            renderItem={({ item: image }) => (
              <Image source={{ uri: image }} style={styles.image} />
            )}
            sliderWidth={550}
            sliderHeight={1000}
            itemWidth={500}
            itemHeight={400}
            onSnapToItem={(index) => setActiveSlide(index)}
          />
          <Pagination
            dotsLength={item.imageR.length}
            activeDotIndex={activeSlide}
            containerStyle={styles.paginationContainer}
            dotStyle={styles.paginationDot}
            inactiveDotStyle={styles.paginationInactiveDot}
            inactiveDotOpacity={0.4}
            inactiveDotScale={0.6}
          />
          <View style={styles.textContainer}>
            <Text style={styles.names}>{item.name}</Text>
            <Text style={{ fontSize: 28, bottom:210, fontWeight: '600' }}>{item.price}</Text>
          </View>
        </>
      ) : (
        <Text>No item selected</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 300,
    height: 300,
    borderRadius: 10,
    bottom: -20,
  },
  names: {
    fontSize: 20,
    fontWeight: '900',
    bottom:225
  },
  paginationContainer: {
    paddingVertical: 8,
      },
  paginationDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 8,
    backgroundColor: '#3498db',
    bottom: 180,
  },
  paginationInactiveDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 8,
    backgroundColor: '#bdc3c7', 
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
      },
});


export default CatagoriDetails
