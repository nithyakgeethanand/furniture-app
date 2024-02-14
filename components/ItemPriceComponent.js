import { View, Text } from 'react-native'
import React from 'react'
import { FontAwesome } from '@expo/vector-icons';


const ItemPriceComponent = ({price}) => {
    return (
        <View style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center"}}
        >
            <FontAwesome name="dollar" size={20} color="#ffdf00" />
            <Text style={{
                fontWeight: "bold",
                fontSize: 20,
                paddingLeft: 5,
            }}>{price}</Text>
        </View>
    )
}

export default ItemPriceComponent