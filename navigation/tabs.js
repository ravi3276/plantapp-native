import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from '../screens/HomeScreen'
import colors from '../styles/color';
import { Icon } from 'react-native-elements'
import BoxScreen from '../screens/BoxScreen'
const Tab = createBottomTabNavigator()

const CameraIcon=({focused})=>(
    <View
        style={{
            backgroundColor: colors.primary,
            width: 50,
            height: 50,
            borderRadius: 50,
            justifyContent: 'center',
            alignItems: 'center',
            marginRight: 10,
        }}
    >
        <Icon name="camera" type="feather" size={30} color={focused ? colors.lightGray : colors.secondary}/>
    </View>
)

const tabs = () => {
  return (
    <Tab.Navigator
    tabBarOptions={{
        showLabel: false,
        style: {
            height: "10%",
        }
    }}
    screenOptions={({ route }) => ({
        headerShown : false,
        tabBarIcon:({focused}) => {
            const tintColor = focused ? colors.primary : colors.gray;

            switch (route.name) {
                    case 'Home':
                      return <Icon name="home" type="feather" size={30} color={tintColor}/>;
                    case 'Box':
                      return <Icon name="box" type="feather" size={30} color={tintColor}/>;
                    case 'Camera':
                      return <CameraIcon focused/>;
                    case 'Search':
                      return <Icon name="search" type="feather" size={30} color={tintColor}/>;  
                    case 'Favorite':
                      return <Icon name="heart" type="feather" size={30} color={tintColor}/>;    
            }  
        }
    })}
    >
        <Tab.Screen
        name="Home"
        component={HomeScreen}
      />
      <Tab.Screen
        name="Box"
        component={BoxScreen}
      />
      <Tab.Screen
        name="Camera"
        component={BoxScreen}
      />
      <Tab.Screen
        name="Search"
        component={BoxScreen}
      />
      <Tab.Screen
        name="Favorite"
        component={BoxScreen}
      />
    </Tab.Navigator>
  )
}

export default tabs

const styles = StyleSheet.create({})