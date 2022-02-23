import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import colors from '../../styles/color';
import plant5 from '../../styles/images/plant_5.jpg'
import plant6 from '../../styles/images/plant_6.jpg'
import plant7 from '../../styles/images/plant_7.jpg'
import { useNavigation } from '@react-navigation/native';


const HomeBody = ({navigation}) => {
  return (
    <View style={styles.container}>
        <View style={styles.header}>
            <View style={styles.title}>
            <Text style={{ fontSize:24,color:colors.secondary}}>today share's</Text>
            <TouchableOpacity activeOpacity={0.6} >
            <Text style={{ fontSize:18,color:colors.secondary}}>see all</Text>
            </TouchableOpacity>
            </View>
            <View>
            <View style={{flexDirection:'row',height:"90%",marginHorizontal:10}}>
                <View style={{flex: 1}}>
                <TouchableOpacity style={{flex: 1,activeOpacity:0.6}} onPress={() =>  navigation.navigate("PlantDetail") }>
                <Image source={plant5} style={{width:"100%",height:"100%",borderRadius:20}} resizeMode="cover"/>
                </TouchableOpacity>
                <TouchableOpacity style={{flex: 1,activeOpacity:0.6,marginTop:10}} >
                <Image source={plant6} style={{width:"100%",height:"100%",borderRadius:20}} resizeMode="cover"/>
                </TouchableOpacity>
                </View>
            <View style={{height:"100%",flex: 1.3,marginLeft:5}}>
            <TouchableOpacity style={{flex: 1,activeOpacity:0.6}} >
                <Image source={plant7} style={{width:"100%",height:"100%",borderRadius:20}} resizeMode="cover"/>
            </TouchableOpacity>
            </View>
            </View>  
            </View>
        </View>

    </View>
  )
}

export default HomeBody

const styles = StyleSheet.create({
    container: {
        height: "50%",
        backgroundColor: colors.lightGray,
    },
    header:{
        flex: 1,
        backgroundColor: colors.white,
        borderBottomLeftRadius:50,
        borderBottomRightRadius:50,
    },
    title:{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 20,
        paddingVertical: 15,
    }
})