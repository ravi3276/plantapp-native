import { FlatList, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import colors from '../../styles/color';
import { Icon } from 'react-native-elements';
import plant1 from '../../styles/images/plant_1.jpeg'
import plant2 from '../../styles/images/plant_2.jpg'
import plant3 from '../../styles/images/plant_3.jpg'
import plant4 from '../../styles/images/plant_4.jpg'

const HomeHeader = () => {
    const [newPlants, setNewPlants] = React.useState([
        {
            id: 0,
            name: "Plant 1",
            img: plant1,
            favourite: false,
        },
        {
            id: 1,
            name: "Plant 2",
            img: plant2,
            favourite: true,
        },
        {
            id: 2,
            name: "Plant 3",
            img: plant3,
            favourite: false,
        },
        {
            id: 3,
            name: "Plant 4",
            img: plant4,
            favourite: false,
        },
    ]);


  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.header}>
            <Text style={{fontSize:30,color:colors.white,textTransform:'capitalize',fontWeight:'600'}}>
                new plants
                </Text>
            <Icon name="scan" type="ionicon" size={35} color={colors.white}/>
        </View>

        <View style={{marginTop:20}}>
            <FlatList 
                data={newPlants}
                keyExtractor={(item) => item.id.toString()}
                horizontal
                showsHorizontalScrollIndicator={false}
                renderItem={({item}) => (
                    <View style={{marginHorizontal:5,alignItems: 'center', justifyContent: 'center'}}>
                        <Image source={item.img} style={{width:125,height:135,borderRadius:30}} resizeMode="cover"/>

                        <View style={{
                            backgroundColor:colors.primary,
                            position:'absolute',right:0,
                            bottom:"20%",padding:10,
                            borderBottomLeftRadius:30,
                            borderTopLeftRadius:30}}>
                            <Text style={{fontSize:18,color:colors.black,fontWeight:'500'}}>
                                {item.name}
                            </Text>
                        </View>
                        <TouchableOpacity style={{
                            position:'absolute',top:0,
                            left:"5%",padding:5,
                        }}
                        >
                            {
                                item.favourite ?
                                (<Icon name="heart" type="feather" size={30} color="red"/>):
                                (<Icon name="heart" type="feather" size={30} color={colors.black} />
                                )
                            }
                        </TouchableOpacity>
                    </View> 
                )}  
            />
        </View>
    </SafeAreaView>
  )
}

export default HomeHeader

const styles = StyleSheet.create({
    container: {
        height: "30%",
        backgroundColor: colors.primary,
        borderBottomLeftRadius: 40,
        borderBottomRightRadius: 40,
        flex: 1,
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 20,
    }
})