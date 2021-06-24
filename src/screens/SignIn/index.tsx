import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { 
  View, 
  Text,
  Image,
  Alert,
  ActivityIndicator
} from 'react-native'
import IllustrationImg from '../../assets/illustration.png'

import { Background } from '../../components/BackgroundLinear'
import { ButtonIcon } from '../../components/ButtonIcon'
import { theme } from '../../global/styles/theme'
import { useAuth } from '../../hooks/useAuth'

import { styles } from './styles'

export function SignIn(){
  const { loading, signIn } = useAuth()
  const navigation = useNavigation()

  async function handleSignIn(){
    // navigation.navigate('Home')
    try{
      await signIn()
    }catch(error){
      Alert.alert(error.message)
    }
  }

  return(
    <Background>
      <View style={styles.container}>
      <Image 
          source={IllustrationImg} 
          style={styles.image}
          resizeMode="stretch"
        />
      
        <View style={styles.content}>
          <Text style={styles.title}>
            Conecte-se {'\n'} 
            e organize suas {'\n'}
            jogatinas
          </Text>

          <Text style={styles.subtitle}>
            Crie grupos para jogar seus games {'\n'}
            favoritos com seus amigos
          </Text>

          {
            loading ? 
              <ActivityIndicator color={theme.colors.primary}/>
            :
              <ButtonIcon
                title="Entrar com Discord"
                onPress={handleSignIn}
              />
          }
          
        </View>
      </View>
    </Background>
  )
}