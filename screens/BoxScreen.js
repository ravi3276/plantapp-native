import { Image, StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import banner from '../styles/images/banner_bg.jpg'
import colors from '../styles/color';
import sun from '../styles/images/sun.png'
import drop from '../styles/images/drop.png'
import garden from '../styles/images/garden.png'
import seed from '../styles/images/seed.png'
import temperature from '../styles/images/temperature.png'
import darkColors from 'react-native-elements/dist/config/colorsDark';
import { Icon } from 'react-native-elements';


const PlantHeader=({icon,barPercent})=>(
  <View style={{marginVertical:20}}>
    <View style={{height:60,width:60,borderWidth:1,borderColor:colors.gray,borderRadius:6,alignItems: 'center', justifyContent:"center"}}>
    <Image source={icon} style={{width:40,height:40,borderRadius:20}}/>
    </View>
    <View
    style={{height:4,backgroundColor:colors.lightGray,width:"100%",borderRadius:6,marginTop:10}}
    >
    </View>
    <View
    style={{height:4,backgroundColor:colors.primary,width:barPercent,borderRadius:6,marginTop:10,position:'absolute',bottom:0}}
    >
    </View>
  </View>
);

const PlantBody = ({icon,title,value}) =>(
      <View style={{flexDirection:'row',alignItems:'center',justifyContent:"space-between",marginVertical:8}}>

        <View style={{flexDirection:'row',alignItems:'center'}}>
        <Image source={icon} style={{width:40,height:40}}/>
        <Text style={[styles.text,{paddingLeft:10}]}>{title}</Text>
        </View>

        <Text style={styles.text}>{value}</Text> 
      </View>
)

const PlantFooter=()=>(
  <View style={{flex:1,flexDirection:'row',paddingVertical:10}}>
      <TouchableOpacity 
      style={{backgroundColor:colors.primary,flex:1,flexDirection:'row',alignItems:'center',justifyContent:"center",borderTopRightRadius:30,borderBottomRightRadius:30}}>
          <Text style={{paddingHorizontal:10,fontSize:26,color:colors.white,fontWeight:"600"}}>Take Action</Text>

          <Icon name="right" type="antdesign" size={40} color={colors.white}/>
      </TouchableOpacity>

      <View style={{flex:1,flexDirection:'row',alignItems:'center'}}>
          <Text style={{flex:1,marginHorizontal:20}}>Almost 2 weeks of growing time</Text>
          <Icon name="arrowdown" type="antdesign" size={30} color={colors.secondary} style={{marginHorizontal:10}}/>
      </View>
  </View>
)


const BoxScreen = () => {
  return (
    <View>
        <View style={{height:"35%"}}>
          <Image source={banner} style={{width:"100%",height:"100%"}} resizeMode="cover"/>
        </View>

        <View style={{
          backgroundColor:colors.white,
          height:"70%",
          borderTopLeftRadius:50,
          borderTopRightRadius:50,
         marginTop:-50,
        }}>
          <View style={{paddingTop:30,marginHorizontal:20}}>
          <Text style={{fontSize:34,fontWeight:"600",color:colors.secondary}}>Requirements</Text>
          <View style={{flexDirection:'row',alignItems:'center', justifyContent:'space-around'}}>
            <PlantHeader icon={sun} barPercent="50%"/>
            <PlantHeader icon={drop} barPercent="25%"/>
            <PlantHeader icon={temperature} barPercent="80%"/>
            <PlantHeader icon={garden} barPercent="60%"/>
            <PlantHeader icon={seed} barPercent="20%"/>
          </View>

          <View>
              <PlantBody icon={sun} title="Sun" value="15°C"/>
              <PlantBody icon={drop} title="Water" value="250 Ml Daily"/>
              <PlantBody icon={temperature} title="Room Temp" value="25°C"/>
              <PlantBody icon={garden} title="Soil" value="3 Kg"/>
              <PlantBody icon={seed} title="Fertilizer" value="250 Mg"/>
          </View>
          </View>

            {PlantFooter()}
        </View>
    </View>
  )
}

export default BoxScreen

const styles = StyleSheet.create({
  text:{
    fontSize:20,
    color:colors.secondary,
    fontWeight:"600"
  }
})