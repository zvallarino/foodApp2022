import { View, Text, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import CategoryCard from './CategoryCard'
import sanityClient from '../sanity'


const Categories = () => {

  const [categories, setCategories] = useState([])


  useEffect(() =>{
    sanityClient.fetch(`
    *[_type == "category"] 
    `).then(data => setCategories(data))
  },[])


  return (
    <ScrollView
    contentContainerStyle={{
      paddingHorizontal:15,
      paddingTop:10,
    }}

    horizontal
    showsHorziontalScrollIndicator = {false}

    >
      {categories?.map(category => <CategoryCard 
      imgUrl = {category.image}
      title = {category.name}
      id = {category._id}
      key = {category._id}
      />)}
    </ScrollView>
  )
}

export default Categories