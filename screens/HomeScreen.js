import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HomeHeader from '../components/Home/HomeHeader'
import HomeBody from '../components/Home/HomeBody'
import HomeFooter from '../components/Home/HomeFooter'
import { useNavigation } from '@react-navigation/native'

const HomeScreen = () => {
    const navigation = useNavigation()
  return (
      <View style={styles.container}>
        <HomeHeader/>
        <HomeBody navigation={navigation}/>
        <HomeFooter />
        </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        // alignItems: 'center',
        // justifyContent: 'center',
    },
})