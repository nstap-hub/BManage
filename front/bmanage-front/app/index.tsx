import React from 'react'
import { Image, View } from 'react-native'
import { Box } from '../components/ui/box'
import { Text } from '../components/ui/text'
const imageurl = require('@/assets/images/logo.png')

export default function index() {
    return(
    <View className='w-full h-full'>
    <Box>
        <Text> Hola</Text>
    </Box>
    <Image source={imageurl} className='w-full h-24'></Image>
    <View className='w-30 h-10 bg-slate-500 '>

    </View>
    </View>
    )
}

