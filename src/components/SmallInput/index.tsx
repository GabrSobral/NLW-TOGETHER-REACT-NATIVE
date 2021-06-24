import React from 'react'
import { styles } from './style'
import { theme } from '../../global/styles/theme'
import { ReactNode } from 'react'
import { TextInput, TextInputProps } from 'react-native'

export function SmallInput({ ...rest }: TextInputProps){
  const { secondary100, secondary80 } = theme.colors

  return(
    <TextInput
      style={styles.container}
      keyboardType="numeric"
      {...rest}
    />
  )
}