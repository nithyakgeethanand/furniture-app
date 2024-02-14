import { View, Text, StyleSheet, TouchableOpacity, ScrollView, FlatList, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import Footer from '../components/Footer'
import HomeHeader from '../components/HomeHeader'
import { MaterialIcons } from '@expo/vector-icons';
import { productCategories } from '../utils/productCategories';
import { bestSellingProducts } from '../utils/bestSellingProducts';
import { AntDesign } from '@expo/vector-icons';
import ItemRatingComponent from '../components/ItemRatingComponent';
import ItemPriceComponent from '../components/ItemPriceComponent';
import BestSelling from '../components/BestSelling';

const HomePage = ({ navigation }) => {
    const [category, setCatorgy] = useState('smartphones');
    const [data, setData] = useState([]);
    const[filteredData, setFilteredData] = useState([]);

    const getProducts = async () => {
        try {
            const response = await fetch("https://dummyjson.com/products");
            const json = await response.json();
            setData(json.products);
            setCategoryFilter(category);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        getProducts()
    }, []);

    //console.log(data);

    const setCategoryFilter = category => {
        setCatorgy(category);
        const categoryData = data.filter(item => item.category == category);
        setFilteredData(categoryData);
    }

    const renderItem = ({ item }) => {
        return (
            <TouchableOpacity onPress={() => navigation.navigate('ProductDetail', { itemDetails: item })}>
                <View style={styles.productCard}>
                    <Image
                        style={{ height: 250, width: 200 }}
                        source={{ uri: item.images[0] }}
                        resizeMode='center' />
                    <Text style={{
                        fontWeight: "bold",
                        fontSize: 20,
                        padding: 10
                    }}>{item.title}</Text>
                    <View style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        width: 200,
                    }}>

                        <View style={{
                            flexDirection: "row",
                            justifyContent: "center",
                            alignItems: "center",
                        }}>
                            <ItemPriceComponent price={item.price} />
                            <ItemRatingComponent rating={item.rating} />

                        </View>

                        <View style={{
                            marginLeft: 20,
                            backgroundColor: "#5FBDFF",
                            borderRadius: 5,
                            padding: 5

                        }}>
                            <AntDesign name="right" size={24} color="#ffffff" />
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }

    return (
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <HomeHeader />
                <View style={{
                    marginTop: 30,
                }}>
                    <Text style={styles.findText}>Find the</Text>
                    <Text style={styles.bestFurniture}>Best <Text style={styles.boldText}>Furniture.</Text></Text>
                </View>
                <View>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                        <View style={styles.listCategory}>
                            {
                                productCategories.map(item => (
                                    <TouchableOpacity
                                        style={[styles.listBtn, category === item.key && styles.listBtnActive]}
                                        onPress={() => setCategoryFilter(item.key)} >
                                        <View style={{ flexDirection: 'row' }}>
                                            <MaterialIcons name={item.icon} size={24}
                                                style={{
                                                    color: category === item.key ? '#FFFFFF' : '#B3B3B3'
                                                }} />
                                            <Text style={[styles.listBtnLabel, category === item.key && styles.listBtnLabelActive]}>{item.name}</Text>
                                        </View>
                                    </TouchableOpacity>
                                ))}
                        </View>
                    </ScrollView>
                </View>

                {/* list of data */}
                <View style={{
                    flexDirection: 'row'
                }}>
                    <FlatList
                        data={filteredData}
                        keyExtractor={(item) => item.id}
                        renderItem={renderItem}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false} />

                </View>

                <View style={styles.content}>
                    <Text style={{
                        fontWeight: "bold",
                        fontSize: 30
                    }}>Best Selling</Text>
                    <Text style={{
                        color: "#5FBDFF",
                        fontWeight: "bold",
                        fontSize: 20
                    }}>See All</Text>
                </View>

                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    <View style={styles.listCategory}>
                        {
                            bestSellingProducts.map(item => (
                                <BestSelling name={item.name} price={item.price} url={item.url} rating={item.rating} />
                            ))
                        }
                    </View>
                </ScrollView>
            </ScrollView>

            {/* <Footer /> */}
        </View>
    )
}

export default HomePage

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        padding: 20,
        marginTop: 20,
    },
    header: {
        backgroundColor: 'lightblue',
        padding: 10,
        alignItems: 'center',
    },
    headerText: {
        fontSize: 18,
        fontWeight: 'bold',
    },

    findText: {
        fontSize: 40,
        marginRight: 5,
    },
    bestFurniture: {
        fontSize: 40,
    },
    boldText: {
        fontWeight: 'bold',
    },
    listCategory: {
        flexDirection: "row",
        marginTop: 20
    },
    listBtn: {
        backgroundColor: "#FFFFFF",
        padding: 10,
        width: 130,
        alignItems: "center",
        borderRadius: 10,
        marginRight: 10,
        height: 50
    },
    listBtnLabel: {
        color: '#B3B3B3',
        padding: 5
    },
    listBtnLabelActive: {
        color: '#FFFFFF',
        padding: 5
    },
    listBtnActive: {
        backgroundColor: "#5FBDFF",
    },
    productCard: {
        backgroundColor: "#ffffff",
        borderRadius: 20,
        height: 380,
        width: 220,
        marginTop: 30,
        marginRight: 15,
        alignItems: "center",
        justifyContent: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 4,
            height: 0,
        },
        shadowOpacity: 0.2,
        shadowRadius: 4,
    },
    content: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 20,

    },


});