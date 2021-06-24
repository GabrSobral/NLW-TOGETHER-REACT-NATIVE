import React from 'react'
import { View, Text, ImageBackground } from 'react-native'
import { BorderlessButton } from 'react-native-gesture-handler'
import { Fontisto } from '@expo/vector-icons'

import { Background } from '../../components/BackgroundLinear'
import { ListHeader } from '../../components/ListHeader'
import { Header } from '../../components/Header'
import { Member } from '../../components/Member'
import { ListDivider } from '../../components/ListDivider'
import { ButtonIcon } from '../../components/ButtonIcon'

import BannerImg from '../../assets/banner.png'

import { styles } from './style'
import { theme } from '../../global/styles/theme'
import { FlatList } from 'react-native'

export function AppointmentCreate(){
  const members = [
    {
      id: '1',
      username: 'Gabriel',
      avatar_url: 'https://github.com/Sobraloser.png',
      status: 'online'
    },
    {
      id: '2',
      username: 'Sobral',
      avatar_url: 'https://github.com/rodrigorgtic.png',
      status: 'offline'
    },
  ]
  return(
    <Background>
      <Header
        title="Detalhes"
        action={
          <BorderlessButton>
            <Fontisto
              size={24}
              name="share"
              color={theme.colors.primary}
            />
          </BorderlessButton>
        }
      />
      <ImageBackground 
        source={BannerImg}
        style={styles.banner}
      >
        <View style={styles.bannerContent}>
          <Text style={styles.title}>
            Lendários
          </Text>

          <Text style={styles.subtitle}>
            É hoje que vamos chegar ao challenger sem perder uma partida da md10.
          </Text>
        </View>
      </ImageBackground>


        <ListHeader 
          title="Jogadores"
          subtitle="Total 3"
        />

        <FlatList
          data={members}
          keyExtractor={ item => item.id }
          renderItem={({ item }) => (
            <Member 
              data={item}
            />
          )}
          ItemSeparatorComponent={()=> <ListDivider/>}
          style={styles.members}
        />

        <View style={styles.footer}>
          <ButtonIcon
            title="Entrar na partida"
          />
        </View>
        
    </Background>
  )
}