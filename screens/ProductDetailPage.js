import { View, Text, Image, StyleSheet, Dimensions } from 'react-native'
import React from 'react'
import ItemPriceComponent from '../components/ItemPriceComponent';
import ItemRatingComponent from '../components/ItemRatingComponent';

const windowWidth = Dimensions.get("window").width;
const windowHeigth = Dimensions.get("window").height;

const ProductDetailPage = ({ route }) => {
  const { itemDetails } = route.params;
  
  return (
    <View>
      <View style={styles.container}>
        <Image
          style={styles.backgroundImage}
          source={{ uri: itemDetails.images[0] }} />
            <View style={styles.cardContainer}>
                <Image
                    style={styles.cardContainerImage}
                    source={{ uri: itemDetails.images[0]}} />
                <View style={{padding:20}}>
                    <Text style={{
                        fontSize: 20,
                        padding: 5,
                        fontWeight:'bold'
                    }}>{itemDetails.title}</Text>
                    <View style={{
                        flexDirection: "row",
                        justifyContent: "center",
                        alignItems: "center"
                    }}>
                        <ItemPriceComponent price={itemDetails.price} />
                        <ItemRatingComponent rating={itemDetails.rating} />
                    </View>
                </View>
            </View>
        </View>
      </View>
  )
}

export default ProductDetailPage

const styles = StyleSheet.create({
container: {
  alignItems: 'center',
  justifyContent: 'center',
  marginTop : 50,
  padding: 20
},
backgroundImage: {
  height: windowWidth,
  width: windowHeigth/3,
  resizeMode: 'contain'
},
cardContainer: {
  backgroundColor: "#ffffff",
  borderRadius: 10,
  height: 100,
  marginTop: 20,
  marginRight:15,
  padding:10,
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "row",
},
cardContainerImage: {
  width: 80,
  height: 80,
  marginBottom: 10,
}
});