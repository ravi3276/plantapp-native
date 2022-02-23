import { StyleSheet, Text, View,TouchableOpacity,FlatList,Image } from 'react-native'
import React,{useState} from 'react'
import colors from '../../styles/color';
import { Icon } from 'react-native-elements'
import profile1 from '../../styles/images/profile_1.jpg'
import profile2 from '../../styles/images/profile_2.jpg'
import profile3 from '../../styles/images/profile_3.jpg'

const HomeFooter = () => {
    const [friendList, setFriendList] = useState([
        {
            id: 0,
            img: profile1,
        },
        {
            id: 1,
            img: profile2,
        },
        {
            id: 2,
            img: profile3,
        },
    ]);
  return (
    <View style={styles.container}>
      <Text style={{ fontSize:26,color:colors.secondary,fontWeight:"600",marginVertical:3}}>Added Friend's</Text>
      <Text style={{ fontSize:20,color:colors.secondary,fontWeight:"500"}}>5 Total</Text>
     
      <View style={{flexDirection:'row',alignItems:'center',height: '60%'}}>
      <View style={{flex: 1.3, flexDirection: 'row', alignItems: 'center'}}>
        <FlatList 
            data={friendList}
            keyExtractor={(item) => item.id.toString()}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({item}) => (
                <View
                style={{ marginLeft: -15,paddingLeft:10 }}
            >
                <Image
                    source={item.img}
                    resizeMode="cover"
                    style={{
                        width: 50,
                        height: 50,
                        borderRadius: 25,
                        borderWidth: 3,
                        borderColor: colors.primary
                    }}
                />
            </View>
                
                )}
                />
                <Text style={[styles.text]}>{friendList.length-1} more</Text>
      </View>
      <View style={{flexDirection:'row',alignItems:'center',justifyContent:"flex-end"}}>
      <Text style={{ fontSize:20,color:colors.secondary}}>Add new</Text>
      <TouchableOpacity style={{backgroundColor:colors.gray,padding:5,borderRadius:10,marginLeft:4}}>
      <Icon name="add" type="ionicon" style={30} color={colors.primary}/>
      </TouchableOpacity>
      </View>
      </View>
    </View>
  )
}

export default HomeFooter

const styles = StyleSheet.create({
    container: {
        height: "20%",
        backgroundColor: colors.lightGray,
        paddingHorizontal:10,
    },
    text:{
        position:'absolute',
        top:15,
        left:'47%',
        fontSize:20,
        color:colors.primary,
    }
})