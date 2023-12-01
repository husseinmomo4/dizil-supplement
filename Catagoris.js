import React, { useState } from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity, TextInput } from 'react-native';

const Catagoris = ({ navigation }) => {
  const categories = [
    {
      id: '1',
      name: 'MassGainer',
      images: [
        { id: '1', name: 'RED REX BEEF MASS GAINER', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlZnroopOz73bcWhzQr2kxOCjE0J5xrykiIw&usqp=CAU', price:"3800 EGP" },
        { id: '2', name: ' Muscle Add Whey Add - Chocolate Gourmet - 133 Servings', url: "https://muscleadd.com/cdn/shop/files/Gain-Add-Vanilla_1426x.jpg?v=1686578140", price:"5100 EGP" },
// Add more images as needed
      ],
    },
    {
      id: '2',
      name: 'WHEY',
      images: [
        { id: '1', name: ' OPTIMUM NUTRITION WHEY GOLD STANDARD', url: "https://hsegy.com/wp-content/uploads/2019/06/Optimum-Nutrition-Gold-Standard-100-Whey-Banana-Cream-5-lbs.jpg", price:"1950 EGP" ,
         imageR: [
          "https://hsegy.com/wp-content/uploads/2019/06/Optimum-Nutrition-Gold-Standard-100-Whey-Banana-Cream-5-lbs.jpg",
          "https://s7.vitaminshoppe.com/is/image/VitaminShoppe/1629500_03?$OP_PDPSKU$&wid=400&hei=400"  ] 
      },
        { id: '2', name: 'Gold Standard 100% Isolate 2.28kg(5lb)', url: 'https://cdn11.bigcommerce.com/s-xs715muowx/images/stencil/original/products/366/1589/Optimum_Nutrition_Gold_Standard_Isolate_2.3Kg_Strawberry_Cream__28984.1693761625.png?c=1', price:"2600 EGP",
        imageR: [
          'https://cdn11.bigcommerce.com/s-xs715muowx/images/stencil/original/products/366/1589/Optimum_Nutrition_Gold_Standard_Isolate_2.3Kg_Strawberry_Cream__28984.1693761625.png?c=1',
           'https://m.media-amazon.com/images/I/81zuvpXQr1L.jpg',
         ],

      },
        { id: '3', name: 'Whey Add-60Serv.-2100G', url: "https://muscleadd.com/cdn/shop/products/MuscleAddWheyAdd-60Serv.-2100G-ChocolateIceCream_1200x.jpg?v=1643642227", price:"1800 EGP",
        imageR:[
          "https://muscleadd.com/cdn/shop/products/MuscleAddWheyAdd-60Serv.-2100G-ChocolateIceCream_1200x.jpg?v=1643642227",
          "https://www.maxmuscleelite.com/web/image/product.image/2566/image_1920/Muscle%20Add%20Whey%20Add-60Serv.-2100G-Chocolate%20Ice%20Cream?unique=1a62609"

        ]      
      },
        { id: '4', name: 'MUSCLETECH NITRO-TECH WHEY GOLD 1 KG  DOUBLE RICH CHOCOLATE', url: 'https://hsegy.com/wp-content/uploads/2020/11/MuscleTech-Nitro-Tech-100-Whey-Gold-Double-Rich-Chocolate-1-kg.jpg', price:"999 EGP",
        imageR: [
          'https://hsegy.com/wp-content/uploads/2020/11/MuscleTech-Nitro-Tech-100-Whey-Gold-Double-Rich-Chocolate-1-kg.jpg',
          'https://super-eg.com/wp-content/uploads/2022/04/81WY9bKbPdL._AC_SL1500_.jpg'
           
        ]
      
      },
        { id: '5', name: 'DYMATIZE ISO100 WHEY PROTEIN ISOLATE', url: 'https://tse2.mm.bing.net/th?id=OIP.OqpDXpl7VkGDCuld_J7zMQHaHa&pid=Api&P=0&h=220' , price:"3100 EGP" },
        { id: '6', name: 'NUTREX RESEARCH ISOFIT 100% WHEY PROTEIN ISOLATE', url: 'https://hsegy.com/wp-content/uploads/2023/02/Nutrex-Research-IsoFit.jpg', price:"2300 EGP"  },
        { id: '7', name: 'MUSCLEPHARM COMBAT 100% WHEY PROTEIN', url: 'https://hsegy.com/wp-content/uploads/2022/10/MusclePharm-Combat-100-Whey-Protein-Cookies.jpg', price:"2100 EGP" },
        { id: '8', name: 'RED REX 100% BEEF PROTEIN ISOLATE', url: 'https://www.bigramylabs.com/cdn/shop/files/Beef-Protein-Isolate-4lbs-Vanilla.png?v=1694942996&width=1946', price:"2900 EGP" },

        // Add more images as needed
      ],
    },
    {
      id: '3',
      name: 'CREATIN',
      images: [
        { id: '1', name: 'CREATINE POWDER Challenger 300 gram', url: "https://challengernutrition.com/cdn/shop/products/Creatine_1024x1024.png?v=1610615799", price:"950 EGP"  },
          { id: '2', name: 'REDREX CREATINE', url: 'https://m.media-amazon.com/images/S/aplus-media-library-service-media/4fa20cc6-9d1d-4908-a4ed-bd5847ddf63c.__CR0,0,1000,1000_PT0_SX300_V1___.png', price:"600 EGP"  },
          { id: '3', name: 'Optimum Nutrition, Micronized Creatine Monohydrate, 300 Capsules, 150 Servings', url: "https://i5.walmartimages.com/seo/Optimum-Nutrition-Micronized-Creatine-Powder-Unflavored-1-32-lb-120-Servings_c2d47ea9-685b-4ce8-a2cd-0b73233a2c63.1e3aabd5b82e466414e44b7e369ed1e1.png", price:"800 EGP"  },
          { id: '4', name: 'MuscleTech 100% Platinum Creatine, 80 Serving', url: 'https://super-eg.com/wp-content/uploads/2020/04/7083_z.jpg', price:"999 EGP"  },
          { id: '5', name: 'R1 CREATINE', url: 'https://cdn8.bigcommerce.com/s-usy1ta06a5/images/stencil/1280x1280/products/175/495/R1CREATINE_75__78297.1493329899.jpg?c=2&imbypass=on' , price:"700 EGP" },
          { id: '6', name: 'Kevin Levrone Anabolic Creatine, Unflavored, 300 Gm', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvkdgQV7zHGvtzMFD1PNlm_SYjMsTAmHtXyg&usqp=CAU', price:"900 EGP"  },
          { id: '7', name: 'Dymatize Creatine Monohydrate Powder - 500g', url: 'https://mass-zone.eu/images/producenci/Dymatize/CREATINE-OPAKOWANIE.webp', price:"1200 EGP" },  
        // Add more images as needed
      ],
    },
    {
      id: '4',
      name: 'PREWORKOUT',
      images: [
        { id: '1', name: '100% Whey Gold Standard.', url: "https://tse2.mm.bing.net/th?id=OIP.BiSNFQi7JenhIp4nlY3SyAHaHT&pid=Api&P=0&h=220", price:"1950 EGP"  },
          { id: '2', name: 'Gold Standard 100% Isolate 2.28kg(5lb)', url: 'https://tse1.mm.bing.net/th?id=OIP.64ig8WMIWDYVvb_kI7Te9wHaHa&pid=Api&P=0&h=220', price:"2600 EGP"  },
          { id: '3', name: 'Whey Add-60Serv.-2100G', url: "https://imgix.lifehacker.com.au/content/uploads/sites/4/2021/04/13/best-pre-workout-4.jpg?auto=format&fit=fill&q=65&nr=20", price:"1800 EGP"  },
          { id: '4', name: 'MUSCLETECH NITRO-TECH WHEY GOLD 1 KG  DOUBLE RICH CHOCOLATE', url: 'https://cdn.muscleandstrength.com/store/media/catalog/product/cache/all/image/700x700/602f0fa2c1f0d1ba5e241f914e856ff9/2/0/2022_m_s_awards_product_imgs_curse_1.jpg', price:"999 EGP"  },
          { id: '5', name: 'DYMATIZE ISO100 WHEY PROTEIN ISOLATE', url: 'https://cdn.shopify.com/s/files/1/1886/1551/products/no-xplode-60servings-grape_800x.jpg?v=1573249257' , price:"3100 EGP" },
          { id: '6', name: 'NUTREX RESEARCH ISOFIT 100% WHEY PROTEIN ISOLATE', url: 'https://cdn.muscleandstrength.com/store/media/catalog/product/cache/all/image/700x700/602f0fa2c1f0d1ba5e241f914e856ff9/n/i/nitrotest-30sv-blue-raspberry_2.jpg', price:"2300 EGP"  },
        // Add more images as needed
      ],
    },
    // Add more categories as needed
  ];

  const handleCategoryPress = (category) => {
    navigation.navigate('CatagoriPadg', { category });
  };

  const renderCategoryItem = ({ item }) => (
    <TouchableOpacity onPress={() => handleCategoryPress(item)}>
      <View style={styles.categoryItem}>
        <Image source={{ uri: item.images[0].url }} style={styles.categoryImage} />
        <View style={{}}>
        <Text style={styles.name}>{item.name}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <FlatList
        key={3}
        numColumns={2}
        data={categories}
        keyExtractor={(item) => item.id}
        renderItem={renderCategoryItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  categoryItem: {
    padding: 9,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  categoryImage: {
    width: 160,
    height:200,
    resizeMode: 'cover',

  },
  name: {
    backgroundColor:"gray",
    height:29,
    fontSize:19,
    fontWeight:"500",
  }
});

export default Catagoris
