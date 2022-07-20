import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { ArrowRightIcon } from 'react-native-heroicons/outline'

import RestaurantCard from './RestaurantCard'
import sanityClient from '../sanity'

const FeaturedRow = ({
  id, title, description
}) => {

  const [restaurants,setRestaurants] = useState([])
  useEffect(() => {
    sanityClient.fetch(`
    *[_type == "featured" && _id == $id] {
      ...,
      restaurants[]->{
        ...,
        dishes[]->,
        type-> {
          name
        }
        },
        }
        `,{ id }).then(
          (data)=>setRestaurants(data)
        )
  },[id])

  return (
    <View>
    <View className = "mt-4 flex-row items-center justify-between px-4">
      <Text className = "font-bold text-lg">
        {title}
      </Text>
      <ArrowRightIcon  color = "#00CCBB"/>
      </View>
      <Text className = "text-xs text-gray-500 px-4">{description}</Text>

      <ScrollView
      horizontal
      contentContainerStyle = {{
        paddingHorizontal:15,

      }}
      showsHorziontalScrollIndicator = {false}
      className = "pt-4"
      >
        {restaurants[0]?.restaurants.map(restaurant => <RestaurantCard 
        key = {restaurant._id}
        id = {restaurant._id}
        title = {restaurant.name}
        rating= {restaurant.rating}
        short_description = {restaurant.short_description}
        genre = {restaurant?.type.name}
        long = {restaurant.long}
        lat = {restaurant.lat}
        dishes = {restaurant.dishes}
        address = {restaurant.address}
        imgUrl = {restaurant.image}
        />)}

      </ScrollView>
    </View>
  )
}

export default FeaturedRow

