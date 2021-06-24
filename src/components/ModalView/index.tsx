import React, { ReactNode } from 'react'
import { Modal, View, ModalProps, TouchableWithoutFeedback } from 'react-native'

import { Background } from '../BackgroundLinear'

import { theme } from '../../global/styles/theme'
import { styles } from './style'

type Props = ModalProps & {
  children: ReactNode;
  closeModal: () => void
}

export function ModalView({ children, closeModal, ...rest }: Props){
  const { secondary100, secondary80 } = theme.colors

  return(
    <Modal
      transparent
      animationType="slide"
      statusBarTranslucent
      {...rest}
    >
      <TouchableWithoutFeedback onPress={closeModal}>
        <View style={styles.overlay}>
          <View style={styles.container}>
            <Background>
              {/* <View> */}
                <View style={styles.bar}/>
                {children}
              {/* </View> */}
            </Background>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  )
}