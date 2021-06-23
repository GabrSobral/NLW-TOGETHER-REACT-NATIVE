import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { styles } from './style'
import { theme } from '../../global/styles/theme'
import { ReactNode } from 'react'

type Props = {
  children : ReactNode
}

export function Background({ children }: Props){
  const { secondary100, secondary80 } = theme.colors

  return(
    <LinearGradient
      style={styles.container}
      colors={[secondary80, secondary100]}
    >
      {children}
    </LinearGradient>
  )
}