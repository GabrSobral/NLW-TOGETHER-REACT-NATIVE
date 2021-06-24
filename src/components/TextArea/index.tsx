import React from 'react'
import { styles } from './style'
import { theme } from '../../global/styles/theme'
import { TextInput, TextInputProps } from 'react-native'

export function TextArea({ ...rest }: TextInputProps){
  const { secondary100, secondary80 } = theme.colors

  return(
    <TextInput
      style={styles.container}
      {...rest}
    />
  )
}