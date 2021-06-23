import React from 'react'
import { RectButtonProps, RectButton } from 'react-native-gesture-handler'
import { Image, Text } from 'react-native'

import { styles } from './style'

export type GuildProps = {
  id: string;
  name: string;
}

export function GuildIcon(){
  return(
      <Image 
        style={styles.image}
        source={{ uri: 'https://github.com/Sobraloser.png'}}
        resizeMode="cover"
      />
  )
}