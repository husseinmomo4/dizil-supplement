import React, { useState } from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const CatagoriPadg = ({ route }) => {
  const { category } = route.params || { category: null };
  const [searchTerm, setSearchTerm] = useState('');
  const [addedToCart, setAddedToCart] = useState({});
  const navigation = useNavigation();

  const filteredImages = category
    ? category.images.filter((item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : [];

  const handleAddToCart = (itemId, itemUrl) => {
    setAddedToCart((prev) => ({ ...prev, [itemId]: { added: !prev[itemId]?.added, url: itemUrl } }));

    setTimeout(() => {
      setAddedToCart((prev) => ({ ...prev, [itemId]: { ...prev[itemId], added: false } }));
    }, 1000);
  };

  const handleGoToDetailScreen = (item) => {
    navigation.navigate('CatagoriDetails', { item });
  };

  const StarRating = ({ rating }) => {
    const stars = Array.from({ length: 5 }, (_, index) => (
      <MaterialCommunityIcons
        key={index}
        name={index < rating ? 'star' : 'star-outline'}
        size={20}
        color="#f7e51b"
      />
    ));

    return (
      <View style={styles.ratingContainer}>
        {stars}
      </View>
    );
  };

  return (
    <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center' }}>
      <>
        <TextInput
          style={{
            height: 40,
            borderColor: 'gray',
            borderRadius: 10,
            borderWidth: 0.5,
            marginBottom: 10,
            backgroundColor: '#fcfcfa',
            margin: 9,
            width: '95%',
            padding: 6,
          }}
          placeholder="Search"
          placeholderTextColor={'gray'}
          onChangeText={(text) => setSearchTerm(text)}
          value={searchTerm}
        />

        {filteredImages.length === 0 ? (
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <MaterialCommunityIcons name="emoticon-sad-outline" size={54} color="black" />
            <Text style={{ fontSize: 21, fontWeight: 'bold', marginTop: 5, marginRight: 19 }}>
              This Item is Not Available
            </Text>
          </View>
        ) : (
          <FlatList
            numColumns={2}
            data={filteredImages}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => handleGoToDetailScreen(item)}>
                <View style={styles.card}>
                  <Image source={{ uri: item.url }} style={styles.categoryImage} />
                  <Text numberOfLines={1} ellipsizeMode="tail" style={styles.names}>
                    {item.name}
                  </Text>
                  <StarRating rating={item.rating} numRatings={item.numRatings} />
                  <TouchableOpacity
                    style={{
                      backgroundColor: addedToCart[item.id]?.added ? '#aaffa8' : '#f7e51b',
                      width: 150,
                      height: 30,
                      borderRadius: 19,
                      justifyContent: 'center',
                      alignItems: 'center',
                      bottom: -10,
                    }}
                    onPress={() => handleAddToCart(item.id, item.url)}
                  >
                    <View style={{ bottom: 9 }}>
                      <Text style={{ fontSize: 19, color: 'black', fontWeight: '700' }}>
                        {item.price}
                      </Text>
                    </View>
                    <Text numberOfLines={1} ellipsizeMode="tail" style={{ color: 'black', marginLeft: 13, bottom:2, fontWeight:"700" }}>
                      {addedToCart[item.id]?.added ? 'Added Succes' : 'Add To Cart'}
                    </Text>
                    <View style={{ marginRight: 102, bottom: 23 }}>
                      <MaterialCommunityIcons
                        name={addedToCart[item.id]?.added ? 'cart-arrow-down' : 'cart-outline'}
                        size={24}
                        color="black"
                      />
                    </View>
                  </TouchableOpacity>
                </View>
              </TouchableOpacity>
            )}
          />
        )}
      </>
    </View>
  );
};

const styles = StyleSheet.create({
  categoryImage: {
    width: 150,
    height: 180,
    margin: 10,
  },
  names: {
    bottom: 14,
    fontSize: 18,
    maxWidth: 200,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    bottom:18
  },
  numRatingsText: {
    marginLeft: 5,
    color: 'gray',
  },
  card: {
    backgroundColor: 'white',
    height: 320,
    width: 170,
    marginLeft: 13,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 9,
    elevation: 8,
    margin: 3,
    marginLeft: 5,
  },
});
export default CatagoriPadg
