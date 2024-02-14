import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import ItemPriceComponent from './ItemPriceComponent'
import ItemRatingComponent from './ItemRatingComponent';

const BestSelling = (props) => {
    let price = props.price;
    let rating = props.rating;
    let url = props.url;
    let name = props.name;

    return (
        <View>
            <View style={{
                backgroundColor: "#ffffff",
                borderRadius: 10,
                width: 210,
                height: 100,
                marginTop: 20,
                marginRight:15,
                padding:10,
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "row",
            }}>
                <Image
                    style={{
                        width: 80,
                        height: 80,
                        marginBottom: 10
                    }}
                    source={{ uri: url }} />
                <View>
                    <Text style={{
                        fontSize: 20,
                        padding: 5
                    }}>{name}</Text>
                    <View style={{
                        flexDirection: "row",
                        justifyContent: "center",
                        alignItems: "center"
                    }}>
                        <ItemPriceComponent price={price} />
                        <ItemRatingComponent rating={rating} />
                    </View>
                </View>
            </View>
        </View>


    )
}

export default BestSelling

const styles = StyleSheet.create({
    
});