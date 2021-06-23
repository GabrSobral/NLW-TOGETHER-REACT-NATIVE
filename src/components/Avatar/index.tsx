import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { Image } from 'react-native'

import { styles } from './style'
import { theme } from '../../global/styles/theme'

type AvatarProps = {
  urlImage: string
}

export function Avatar({ urlImage }: AvatarProps){
  const { secondary50, secondary70 } = theme.colors
  return(
    <LinearGradient
      style={styles.container}
      colors={[secondary50, secondary70]}
    >
     <Image source={{ uri: urlImage }} style={styles.avatar}/>
    </LinearGradient>
  )
}