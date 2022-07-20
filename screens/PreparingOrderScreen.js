import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import * as Animatable from 'react-native-animatable'
import * as Progress from 'react-native-progress'

const PreparingOrderScreen = () => {
  return (
    <SafeAreaView className='flex-1 bg-[#00CCBB] justify-center items-center'>
      <Animatable.Image
      source={require("../assets/seemless.gif")}
      animation="slideInUp"
      iterationCount={1}
      className = "h-96 w-96"
      />

    <Animatable.Text
      animation="slideInUp"
      iterationCount={2}
      className = "text-lg my-10 text-white font-bold text-center"
      > Waiting for Restaurant to accept your order!</Animatable.Text>

    <Progress.Circle size ={60} indeterminate ={true} color="white" />

    </SafeAreaView>

 
  )
}

export default PreparingOrderScreen