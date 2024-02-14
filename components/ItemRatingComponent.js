import { View, Text } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';

const ItemRatingComponent = ({rating}) => {
    return (
        <View style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center"
        }}
        >
            <AntDesign name="star" size={20} color="#ffdf00" style={{ marginLeft: 10 }} />
            <Text style={{
                fontWeight: "bold",
                fontSize: 20,
                paddingLeft: 5,
            }}>{rating}</Text>
        </View>
    )
}

export default ItemRatingComponent